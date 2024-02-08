const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");
const Room = require("../models/room");
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51NMr17SCU1u1Pk3cTya1PwWFdmYiUxLIGrFZk9w5TwgGAIAoLkS6Db31iPWI8itu8zfAF4vEhTRTCu49l56WlS6o00mJAzWCFf');

router.post("/bookroom", async (req, res) => {  
    const {
        room,
        userid,
        fromdate,
        todate,
        totalamt,
        totaldays,
       
        token 
    } = req.body;

    try {
        const customer=await stripe.customers.create({
            email :token.email,
            source : token.id
        })
        const payment = await stripe.charges.create({
            amount : totalamt *100,
            customer : token.id,
            currency : "inr",
            receipt_email : token.email


            },{
                idempotencykey : uuidv4()
            }
        )
if(payment){
    try
    
    {
       
        const newbooking = new Booking({
               room: room.name,
               roomid: room._id,
               userid,
               fromdate: moment(fromdate).format('DD-MM-YYYY'),
               todate: moment(todate).format('DD-MM-YYYY'),
               totalamt,
               totaldays,
              
               transactionId: '456',
              token
           })
        const bookings = await newbooking.save()
           
          


       
       
       res.send('Payment Successfull , Your room is book')

   } catch (error) {
       return res.status(400).json({ error });
   }

}

        
    } catch (error) {
        return res.status(400).json({ error })
    }

   
});

router.post("/getbookingsbyuserid",async(req,res)=>{
const userid = req.body.userid


try {
   const bookings = await Booking.find({userid : userid})
   res.send(bookings) 
} catch (error) {
    return res.status(400).json({ error });
    
}

});
router.get("/getallbookings",async(req,res)=>{

    try {
       const bookings = await Booking.find()
       res.send(bookings) 
    } catch (error) {
        return res.status(400).json({ error });
    }
})




module.exports = router;
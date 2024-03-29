const express =require("express");
const app=express();
const dbconfig=require('./db')
const roomsRoute=require('./routes/roomsRoute')
const userRoute=require('./routes/userRoute')
const bookingRoute=require('./routes/bookingRoute')
app.use(express.json())
app.use('/api/rooms',roomsRoute)
app.use('/api/user',userRoute)
app.use('/api/bookings',bookingRoute)
const port=process.env.PORT||5000;
console.log(port);
app.listen(port,()=> console.log("node sever"));
const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    room: {
        type: String,
        require: true
    },
    roomid: {
        type: String,
        require: true
    },
    userid: {
        type: String,
        require: true
    },
    fromdate: {
        type: String,
        require: true
    },
    todate: {
        type: String,
        require: true
    },
    totalamt: {
        type: Number,
        require: true
    },
    totaldays: {
        type: Number,
        require: true
    },
    // time:{
    //     type:String,
    //     require:true
    // },
    transactionid: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        default: 'booked'
    },
    token:
    {
        type:String,
        require:true
    }
}, {
    timestamps: true,




})
const bookingmodel = mongoose.model('bookings', bookingSchema);
module.exports = bookingmodel
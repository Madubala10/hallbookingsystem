const mongoose=require('mongoose');
const roomSchema=mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    maxcount : {
        type:Number,
        required:true
    },
    PhoneNO : {
        type:Number,
        required:true

    },
    rent : {
        type:String,
        required:true
    },
    imageurls : [],
    currentbookings : [],
    Ac : {
        type:String,
        required : true
    },
    description : {
        type:String,
        required:true
    }

},
{
    timestamps:true,
})
const roommodel=mongoose.model('rooms',roomSchema)
module.exports=roommodel
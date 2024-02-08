const mongoose=require("mongoose");
var mongoURL='mongodb+srv://srvjmpartyhall:srvjmparty293_24@cluster0.o8ydfff.mongodb.net/srvjm'
mongoose.connect(mongoURL,{useunifiedTopology:true,usenewURLParser:true})
var connection=mongoose.connection
connection.on('error',()=>{
    console.log('mongodb Connection failed')
})
connection.on('connected',()=>{
    console.log('Connection successfully')
})
module.exports=mongoose
const mongoose =require('mongoose');
//
mongoose.connect('mongodb://127.0.0.1:27017/iot-api',{
    useNewUrlParser:true,
    useCreateIndex:true
}).then((result)=>{
    console.log('connected to mongodb')
}).catch((e)=>{
    console.log('cannot connect to mongodb')
})
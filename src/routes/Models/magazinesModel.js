const mongoose=require('mongoose')

const magazinesSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    isbn:{
        type:String,
        require:true
    },
    authors:{
        type:String,
        require:true
    },
    publishedAt:{
        type:String,
        require:true
    }
},{timeStamps:true})
module.exports=mongoose.model('magazines',magazinesSchema)
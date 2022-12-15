const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
   email:{
    type:String,
    require:true
   } ,
  firstname:{
    type:String,
    require:true 
  },
  lastname:{
    type:String,
    require:true
  }
},{timeStamps:true})

module.exports=mongoose.model('author',authorSchema)
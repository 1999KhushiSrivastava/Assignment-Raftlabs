const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
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
    description:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model('book',bookSchema)
const {readCSVFile} = require('../readcsv')
const bookModel = require('../Models/booksModel')
const magazineModel = require('../Models/magazinesModel')
const Json2csvParser = require("json2csv").Parser
const fs = require('fs')

const books= async function(req,res){
    try{
    let data = await readCSVFile('../books.csv')
    let result = await bookModel.insertMany(data)
    return res.status(200).send(result)
    }
    catch(err){
        return res.status(500).send({status:false, msg:err})
    }
}
const bookByIsbn = async function(req,res){
    try{
    let answer = await bookModel.findOne({isbn:req.params.isbn})
    return res.status(200).send(answer)
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}

const bookByEmail = async function(req,res){
    try{
      let email = await bookModel.find({authors:req.params.email})
      return res.status(200).send(email)
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}

const sorted = async function(req,res){
    try{
       let sorted = await bookModel.find()
       let sorteds =await magazineModel.find()
       sorted=[...sorted,...sorteds]
        sorted.sort((a, b) =>
    a.title.localeCompare(b.title));
       return res.status(200).send(sorted)
    }
    catch(err){
        console.log(err)
        return res.status(500).send({status:false,msg:err})
    }
}
const createBook = async function(req,res){
    try{
    let data = req.body
    await bookModel.create(data)
    const book = await bookModel.findOne(data).select({_id:0,__v:0,createdAt:0,updatedAt:0})
    const json2csvParser = new Json2csvParser({ header: true });
        const csvData = json2csvParser.parse(book._doc);

        fs.writeFile("booksNew.csv", csvData, function(error) {
          if (error) throw error;
          console.log("booksNew.csv successfully!");
        });
        return res.status(201).send(book)
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}
module.exports = {books,createBook,bookByIsbn,bookByEmail,sorted}
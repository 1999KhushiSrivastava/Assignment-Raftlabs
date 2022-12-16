const {readCSVFile} = require('../readcsv')
const bookModel = require('../Models/booksModel')
const Json2csvParser = require("json2csv").Parser
const fs = require('fs')

const books= async function(req,res){
    let data = await readCSVFile('../books.csv')
    let result = await bookModel.insertMany(data)
    return res.status(200).send(result)
}

const createBook = async function(req,res){
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
module.exports = {books,createBook}
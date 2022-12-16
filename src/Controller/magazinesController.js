const {readCSVFile} = require('../readcsv')
const magazineModel = require('../Models/magazinesModel') 
const Json2csvParser = require("json2csv").Parser
const fs = require('fs')

const magazine= async function(req,res){
    let data = await readCSVFile('../magazines.csv')
    let result = await magazineModel.insertMany(data)
    return res.status(200).send(result)
}

const magazineByIsbn = async function(req,res){
    try{
       let answer = await magazineModel.findOne({isbn:req.params.isbn})
       return res.status(200).send(answer)
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}
 const magazineByEmail = async function(req,res){
    try{
      let email = await magazineModel.find({author:req.params.email})
      return res.status(200).send(email)
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
 }
 const createMagazine = async function(req,res){
    try{
    let data = req.body
    await magazineModel.create(data)
    const magazine = await magazineModel.findOne(data).select({_id:0,__v:0,createdAt:0,updatedAt:0})
    const json2csvParser = new Json2csvParser({ header: true });
        const csvData = json2csvParser.parse(magazine._doc);

        fs.writeFile("magazinesNew.csv", csvData, function(error) {
          if (error) throw error;
          console.log("magazinesNew.csv successfully!");
        });
        return res.status(201).send(magazine)
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}
module.exports = {magazine,magazineByIsbn,magazineByEmail,createMagazine}
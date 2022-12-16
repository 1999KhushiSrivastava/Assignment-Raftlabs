const {readCSVFile}=require('../readcsv')
const authorModel = require('../Models/AuthorModel')


const authors= async function(req,res){
    let data = await readCSVFile('../authors.csv')
    let result = await authorModel.insertMany(data)
    return res.status(200).send(result)
}


module.exports = {authors}

const {readCSVFile} = require('../readcsv')
const magazineModel = require('../Models/magazinesModel') 

const magazine= async function(req,res){
    let data = await readCSVFile('../magazines.csv')
    let result = await magazineModel.insertMany(data)
    return res.status(200).send(result)
}

module.exports = {magazine}
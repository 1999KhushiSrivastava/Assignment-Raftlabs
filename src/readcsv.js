const fs =  require('fs');
const CSV = require('csv-parser');
const csvtojson = require("csvtojson"); 


const readCSVFile =async(file) => {
    let result = await csvtojson().fromFile(file)
    return result 
};
module.exports= {readCSVFile}


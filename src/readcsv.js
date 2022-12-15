const fs =  require('fs');
const CSV = require('csv-parser');
const csvtojson = require("csvtojson"); 


const readCSVFile =(file) => {
    let myPromise=new Promise((resolve,rejects)=>{
        csvtojson().fromFile(file)
        .then((result)=>req.result=result)
        .catch((err)=>console.log(err))
    })


  
};
module.exports= {readCSVFile}

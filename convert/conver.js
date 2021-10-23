const fs = require('fs');
const path = require('path');

var filePath = path.join(__dirname,'calendar.csv');
csv = fs.readFileSync(filePath);

var f = csv.toString().split("\n");
headers = f.shift().split(",");

var array = [];

f.forEach(element => {
    let tmp = {}
    let row = element.split(",");
    if(row[9] === undefined){
        return
    }
    tmp[headers[3].replace(/['"]+/g,'')] = row[3].replace(/['"]+/g,"");
    array.push(tmp)
});

var dictArr = JSON.stringify(array);
fs.writeFile("calendar.json", dictArr,(error)=>{
    if(error)
        console.log("error: "+error)
});

const fs = require("fs")

function writeFile(data){
    fs.writeFile("./dist/index.html", data, (error)=>{
        error ? console.error(error) : console.log("Successfully Written")
    })
}

module.exports = writeFile
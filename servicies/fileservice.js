const fs = require("fs")
const path = require("path")

class FileService {
    constructor(file_path) {
        console.log("con",file_path)
        this.filepath = file_path
    }

    readFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filepath, (error, data) => {
                if (error) {
                    console.log("code:",error.code)
                    reject(error)
                    
                }
                try {
                    let record = []
                    if (data.toString().trim() != "") {
                        record = JSON.parse(data.toString())
                    }
                     resolve(record)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }

    writeFile(fileData) {
        return new Promise((resolve,reject)=>{

            fs.readFile(this.filepath,"utf-8",(err,data)=>{
                if(err)
                {
                    reject(err)
                }
                let arryItem =[]
                if(data.toString()!="")
                {
                    arryItem =JSON.parse(data.toString())
                }
            })
        })
    }
}

module.exports =FileService
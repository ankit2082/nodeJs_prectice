const express =require("express")
const dataControlers =require("../controllers/dataControllers")

const path =require("path")
const fs =require("fs")
const dataObj =require("./data")
const FileServie =require('../servicies/fileservice')

const router = express.Router()

router.get("/",dataControlers.getData)
module.exports =router

/*router.get("/",(req,res,next)=>{

    let filedata='';

    //console.log(process.mainModule.filename)
    //console.log(require.main.filename)
 
    // console.log("before read data ")
    // console.log(dataObj.arrayDataTemp)
    // console.log("after read data")

    const filePath =path.join(__dirname,"..","dummy.txt")
    console.log(filePath)

    const fileObj   =new FileServie(filePath)

    try{
        fileObj.readFile()
        .then((data)=>{
            console.log(data)
            let header =[]
            if (Array.isArray(data) && data.length>0)
            {
                 header = Object.keys(data[0])   
            }
            
            res.render("home",{
                record:data,
                header:header,
                pageTitle:"Homepage"
            })
        })
        .catch((err)=>{
            console.log("catch")
            console.log(err)
            res.status(500).send("error occur while fetching data")
        })
    }catch(err)
    {
        console.log(err)
    }

   return
        


    fs.readFile("./dummy.txt",(err,data)=>{

        //filedata += data.toString();

       // createTable(data,htmll)

       //1)using normal html file
         //res.send(htmll.replace('@@dataRecord@@',data.toString()))
         //res.send(createTable(data,htmll))
        //2) using pug
        console.log("json file",data.toString())
        let record=[]
        if(data.toString().trim()!=="")
        {
             record=JSON.parse(data.toString())
        }
        
        console.log(record)
        let header=[]
        if(record.length>0){
            header=Object.keys(record[0])
        }
        
        // res.render("home",{record:record,header:header,layout:false})

        res.render("home",{record:record,header:header,pageTitle:"Homepage"})


        // res.render("home",{record:record,header:header,layout:false})  //-only render home.hbs

        //res.render("home_normal",{record:record,header:header,layout:false}) // main.hbs as templete and home_normal become child page

    })
})

function createTable(data,htmlContent){

    const headerColumn = `<th>Id</th> <th>name</th> <th>email</th> <th>file</th>  <th>Action</th>`

    let rowData =''

    let dataArray =[]

    if (data.toString().trim()!=="")
    {
        dataArray = JSON.parse(data.toString())
    }

    console.log(dataArray.length)

    if (dataArray.length>0)
    {
        htmlContent= htmlContent.replace("@@tableHead@@",headerColumn)

        dataArray.forEach((element,index) => {
            // console.log(element.name)
            rowData = rowData +`<tr> 
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.email}</td> 
            <td>${element.file}</td>  
            <td><a href="/deleteData/${index}" class="btn btn-danger">delete</a></td></tr>`
        });

        htmlContent= htmlContent.replace("@@tableRow@@",rowData)

    }else{
        rowData =rowData +`<tr>
        <td colspan="5">No data ...</td></tr>`
        htmlContent= htmlContent.replace("@@tableHead@@",headerColumn)
        htmlContent =htmlContent.replace("@@tableRow@@",rowData)
    }

    htmlContent=htmlContent.replace("@@dataRecord@@","")

    return htmlContent
}
*/
/*const htmll =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            font-size: 2em;
            text-align: center;
        }

        a:hover {
            background-color: #007BFF;
            color: white;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
}

        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }

        tr:nth-child(even) {
          background-color: #dddddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>This is the home page</h1>
        <a href="/add-data" class="btn btn-primary">Add Data</a>
    </div>

    <div class="container">
        @@dataRecord@@

        <table>
           <tr>
               @@tableHead@@
           </tr>
           @@tableRow@@
        </table>
    </div>
</body>
</html>
`*/




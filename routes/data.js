 const { error } = require('console')
const express =require('express')
 const fs = require("fs")

 const path =require("path")

 const route =express.Router()

 const arrayDataTemp =[]
 

 const htmlForm=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 60%;
            margin: 50px auto;
            padding: 30px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            font-size: 2.5em;
            text-align: center;
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        label {
            font-size: 1.1em;
            color: #555;
        }

        input[type="text"],
        input[type="email"],
        input[type="file"] {
            padding: 8px;
            font-size: 1em;
            border-radius: 4px;
            border: 1px solid #ccc;
            width: 100%;
        }

        button {
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            font-size: 1.1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            width:15%;
        }

        button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Submit Data</h1>
        <form action="/add-data" name="submit1" method="POST" >
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="file">File:</label>
            <input type="file" id="file" name="file" required>

            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
`


 route.get("/add-data",(req,res,next)=>{
    console.log("Second middleware")
   // console.log(req.accepts('html'))
   // console.log(req.query)
   //console.log(req.get('html'))
   //next()

   //res.attachment('./image.png')
   //res.append(".........")

   //res.sendFile("./views/data.html")  -- not working 
   console.log(__dirname)
   console.log(path.join(__dirname,"../","views","data.html"))
    res.sendFile(path.join(__dirname,"../","views","data.html"))
   //res.render("data",{data:"pug data"})
  //res.send(htmlForm)

})


route.post("/add-data",(req,res,next)=>{

   /*console.log(req.body)

    let record = `name : ${req.body.name} \nemail: ${req.body.email} \n------------------------------  \n`
    console.log(record)

    fs.writeFile("./dummy.txt",record,(error)=>{
     
     console.log(error)
     res.redirect("/")
    })*/

    fs.readFile("./dummy.txt",(err,data)=>{

        let dataArray =[]
        

        if (err){
            return res.redirect("/")
        }
    
        console.log(data.toString().trim()==="")
        if(data.toString().trim()===""){
            dataArray=JSON.parse("[]")
        }else{
            dataArray=JSON.parse(data.toString())
            console.log(" hit ")
        }

        dataArray.push(req.body)

        //for testing 
        arrayDataTemp.push(req.body)
        //
        
        fs.writeFile('./dummy.txt',JSON.stringify(dataArray,null,2),(err)=>{
           
            if(err){
                res.statusCode(500).send("<h1>Error occurred while saving the data</h1>")
            }
            else{
                res.redirect("/")
            }
        });

    });
})

// for data delete 
route.use("/deleteData/:id",(req,res,next)=>{
    let dataId =req.params.id
    console.log(req.params.id)
    if(dataId>=0)
    {
       fs.readFile("./dummy.txt",(err,data)=>{
           
          if(err){
             return res.redirect("/")
          }
          let dataArray=[] ;
           
          if(data)
          {
            dataArray =JSON.parse(data.toString())
          }

          if(dataArray.length>0 && dataArray.length>dataId)
          {
            dataArray.splice(dataId,1)
            console.log(dataArray)
            fs.writeFile("./dummy.txt",JSON.stringify(dataArray,null,2),(err)=>{
                if(err){
                  return  res.redirect("/")
                }
                return res.redirect("/")
            })
          }
       });
    }
})

 module.exports ={route,arrayDataTemp}


//  const storeData =(data)=>{

//     console.log("::::::::::::::::::::::::::::")
//     console.log(localStorage.getItem("myData"))

//     console.log("::::::::::::::::::::")

// }
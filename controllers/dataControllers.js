const path =require("path")
const FileServie =require('../servicies/fileservice')

const getData =(req,res,next)=>{
    const filePath =path.join(__dirname,"..","dummy.txt")
    console.log("filll",filePath)
    console.log(__dirname)

    const fileObj =new FileServie(filePath)
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

}

const deleteData =(req,res,next)=>{
    let dataId =req.params.id
        console.log(req.params.id)

        const filePath =path.join("../")
        if(dataId>=0)
        {

           const fileObj =new FileServie() 
           fs.readFile("../dummy.txt",(err,data)=>{
               
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
}

module.exports ={getData}

  

const http =require('http')
const fs =require("fs")
const express =require("express")
const path =require("path")


// const bodyParser =require("body-parser") - no more needed


const app =express()

const dataRouter =require("./routes/data")
const homeRouter =require("./routes/home")

const handlehbs=require('express-handlebars')

//----this is for pug 
/* app.set("view engine","pug")
 app.set("views","views")*/

//----this is for handlebar 
/*app.engine("hbs",handlehbs.engine({extname:'.hbs',layoutsDir:"views/layout/",defaultLayout:"main",partialsDir:"views/partials/"}))
app.set("view engine","hbs")
app.set("views","views")*/

// for ejs

app.set("view engine","ejs")
app.set("views","views")


app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"css")))

app.use(dataRouter.route)
app.use(homeRouter)

//   app.use('/',(req,res,next)=>{
//       console.log("this is first middleware")
//       next()
//       //express.json()    
//   })

// app.use(express.json())


// 404 request
app.use((req,res,next)=>{
   
    // res.status(404).sendFile(path.join(__dirname,"views","pageNotFound.html"))
    res.render("pageNotFound",{pageTitle:"not found ejs"})
    // res.status(404).send("<h1>Page not found</h1>")
});





// app.get("/",(req,res)=>{
//     res.send("hello")
//     //res.end()
// });

// const server =http.createServer(app)
// server.listen(3000)

app.listen(3000)
// in express code


// code for normal http ms 

//const http =require('http')

//const fs =require("fs")

// const route = require("./route")
//const qString =require("querystring")


//  const server =http.createServer((req,res)=>{
// //    route.processData(req,res)
//  })


//server.listen(3000)

//.close(()=>{
//    process.exit()
//})


//const http =require('http')
const fs =require("fs")

const processData = (req,res)=>{
    const url =new URL(req.url,`http://${req.headers.host}`)

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url==="/")
    {
        res.write(htmlForm)
        res.end()
        return
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url==="/submit" && req.method==="POST"){
        
        const body =[]
            req.on("data",(chunk)=>{
            console.log(chunk)
            //console.log(`Inside q string : ${qString.parse(chunk)}`)
            body.push(chunk)
            })

          return  req.on("end",()=>{
                let finalBody =Buffer.concat(body).toString()
                console.log(finalBody)
                console.log(finalBody.split("&"))

                console.log(finalBody.split("&").join('\n'))

                // fs.appendFileSync("dummy.txt",finalBody.split("&").join('\n'))
                // fs.writeFileSync("dummy.txt",finalBody.split("&").join('\n'))
                fs.writeFile("dummy.txt",finalBody.split("&").join('\n'),(err)=>{
                    
                    res.writeHead(302,{'Location':'/'})
                    res.end()
                })
            })

        // fs.appendFileSync("dummy.txt",chunk)
        //  res.statusCode=302;
        //   res.setHeader('Location',"/")

        
    //     res.writeHead(302,{'Location':'/'})
    //    res.end()

       //return
     }
   
    // console.log(url.href)

    let id = url.searchParams.get("id")

    console.log("id",id)
    let returnPerson= people_rec.filter((obj)=>obj.id==id)

    console.log(returnPerson)
    //console.log(url.searchParams.get("id"))
    // console.log(req.url)
    // console.log(req.headers.host)

    res.writeHead(200, { 'Content-Type': 'text/html' });

    //res.write(htmlc)
    res.write("response submited successfully")
     res.end(JSON.stringify(returnPerson))
     //res.end(JSON.stringify(returnPerson))
    //res.end(res)
    //console.log("hello")

    // server.close(() => {
    //     console.log('Server has stopped.');
    //   });
    //process.exit()
}

const htmlc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
</head>
<body>
    <h1>Submit Data</h1>
    <form action="http://localhost:3000/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`

const htmlForm=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
</head>
<body>
    <h1>Submit Data</h1>
    <form action="/submit" name="submit1" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`

const people_rec = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "Diana", age: 28 },
    { id: 5, name: "Ethan", age: 35 },
    { id: 6, name: "Fiona", age: 27 },
    { id: 7, name: "George", age: 31 },
    { id: 8, name: "Hannah", age: 24 },
    { id: 9, name: "Ian", age: 29 },
    { id: 10, name: "Julia", age: 26 },
  ];

  

module.exports ={processData}

















// const fs =require('fs');
// fs.writeFileSync('a.txt','hello world ')


//  const person ={
//      name:"abc",
//     //  age: 20,
//     //  myFunction:function(){
//     //    return  `my name is ${this.name}`;
//     //  }
//  }

// console.log(person.myFunction())

// // spread op :

//const arr =[1,2,3,1,2,16,1]
//
////const arr2=arr.splice(1,1)
//
////console.log(arr2)
//console.log(arr)
//const [sbarr1,...sbarr2]=arr
//console.log(...arr)
//console.log(sbarr1,sbarr2)

/*const pr =new Promise((resolve,reject)=>{

    let x=1/0
    console.log(x)
    if (true)
    {
        resolve("success")
    }else{
        reject("fails")
    }
})

pr.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})*/

/*const fetchData = new Promise((resolve,reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
    .then((result) => {
        console.log(result); 
        return fetchData;
    })
     .then((processedData) => {
        processedData.then((text)=>{
            console.log(text)
        })
     })
    //  .catch((error) => {
    //      console.error("Error:", error);
    //  });

*/

//     const fetchData2 = () =>{ 
//      const prs=  new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data fetched"), 1000);
//     })
//     return prs
// };
    
//     fetchData2()
//         .then((result) => {
//             console.log("First then:", result);
//            return fetchData2()
//         })
//         .then((data) => {
//             // console.log("Second then:", data); 
//         });

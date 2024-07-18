require("dotenv").config();
const express = require('express')
const app = express();
const qoutesSource = require("./quotesSource.json")
const port =process.env.PORT||8000


app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get("/getqoutes",(req,res)=>{
    res.send(qoutesSource)
})
app.get("/random-qoutes",(req,res)=>{
    const randomIndex = Math.floor(Math.random() * qoutesSource.length)
    res.send(qoutesSource[randomIndex])
})


app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
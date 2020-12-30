require("dotenv").config();
const express = require('express')
const app=express();
const db = require('./db/index')
app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/juice_items", async(req,res)=> {
    try {
        const results=  await db.query("Select * from juice_items");
        console.log(results.rows)
          res.status(200).json({status:"success",data: results.rows}
      )}
     catch (error) {
        res.status(500).json({status:"failed"})
    }});

app.get("/juice_items/:id", async(req,res)=> {
    try {
        const results=  await db.query("Select * from juice_items where juice_id=$1",[req.params.id]);
        console.log(results.rows)
          res.status(200).json({status:"success",data: results.rows}
      )}
     catch (error) {
        res.status(500).json({status:"failed"})
    }});

const port= process.env.PORT; 

app.listen(port,()=>{
    console.log(`server runing in node on port ${port}`)
}
  );

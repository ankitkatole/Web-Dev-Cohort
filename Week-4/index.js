const express = require("express");

const app = express();

app.use(function(req, res, next) {
  console.log("request received");
  next();
})

app.get("/sum",(req,res)=>{
  console.log(parseInt(req.query.a)+parseInt(req.query.b))
    res.json({
      ans: parseInt(req.query.a)+parseInt(req.query.b)
    })
})
app.get("/multiply",(req,res)=>{
  console.log(req.query.a*req.query.b)
    res.json({
      ans: req.query.a*req.query.b
    })
})
app.get("/divide",(req,res)=>{
  console.log(req.query.a/req.query.b)
    res.json({
      ans: req.query.a/req.query.b
    })
})
app.get("/substract",(req,res)=>{
  console.log(req.query.a-req.query.b)
    res.json({
      ans: req.query.a-req.query.b
    })
})

app.listen(3000,()=>{
  console.log("Started Listening")
});
require('dotenv').config();
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const port = process.env.PORT;
const uri = process.env.DB_URL;
const secretkey = process.env.SECRET_KEY;
const {auth} = require("./middlewares/auth")
const {UserModel,TodoModel} = require("./db");


const app = express();
app.use(express.json());

mongoose.connect(uri.toString())
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));


app.post("/signup",async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    await UserModel.create({
        email:email,
        password:password,
        name:name
    });

    res.json({
        message: "You are Signed up"
    })
})

app.post("/signin",async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({id:user._id.toString()},secretkey);
        res.json({
            token
        })
    }else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

app.post("/todo",auth,async  function(req, res) {
    const userId = req.userId;
    const title = req.title;
    todo = await TodoModel.create({
        title:title,
        userId:userId,
        status:false
    })

    res.json({
        todo
    })
});

app.get("/todos",auth,async function(req, res) {
    const todo = await TodoModel.find({
        userId : req.userId
    })
    res.json({
        todo
    })
});

app.listen(port);


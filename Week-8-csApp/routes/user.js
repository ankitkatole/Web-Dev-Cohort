const express = require("express");
const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
    res.json({
        messsage:"Working"
    })
})

userRouter.post("/signin", (req, res) => {

})

userRouter.get("/purchases", (req, res) => {

})

module.exports = {
    userRouter: userRouter
}
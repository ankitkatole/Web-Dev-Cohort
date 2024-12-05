const {Router} = require("express");
const {courseModel} = require("../models/course");
const courseRouter = Router();

courseRouter.get("/", (req, res) => {
    res.json({
        messsage:"Working"
    })
})
courseRouter.post("/purchase", (req, res) => {
    res.json({
        messsage:"Working"
    })
})

module.exports = {
    courseRouter:courseRouter
}

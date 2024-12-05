const {Router} = require("express");
const {courseModel} = require("../models/course");
const courseRouter = Router();

courseRouter.get("/",async (req, res) => {
    const courses = await courseModel.find();
    res.status(200).json({
        message:"Done",
        data:courses
    });
})
courseRouter.post("/purchase", (req, res) => {
    res.json({
        messsage:"Working"
    })
})

module.exports = {
    courseRouter:courseRouter
}

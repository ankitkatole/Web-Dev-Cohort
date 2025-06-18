const {Router} = require("express");
const {courseModel} = require("../models/course");
const {purchaseModel} = require("../models/purchase");
const courseRouter = Router();
const {userMiddleware} = require("../middlewares/user")

courseRouter.get("/",async (req, res) => {
    const courses = await courseModel.find();
    res.status(200).json({
        message:"Done",
        data:courses
    });
})

//Its just demo. Sicne we are not actually implementing payment gateway
courseRouter.post("/purchase",userMiddleware,async (req, res) => {
     const userId = req.userId;
     const courseId = req.body.courseId;
     const purchase = await purchaseModel.create({
        courseId,
        userId
     })

     res.status(202).json({
        message:"Purchase Succesfull",
        purchaseId:purchase._id
     })
})

module.exports = {
    courseRouter:courseRouter
}

const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET_KEY_ADMIN } = require("../constants")
const { adminMiddleware } = require("../middlewares/admin");

const { adminModel } = require("../models/admin");
const { courseModel } = require("../models/course");


const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        fname: z.string(),
        lname: z.string()
    })
    const parsedBodyWithSuccess = requiredBody.safeParse(req.body);
    if (!parsedBodyWithSuccess.success) {
        res.json({
            message: "Invalid Credentials",
            errors: parsedBodyWithSuccess.error
        });
        return;
    }
    const { email, password, fname, lname } = req.body;

    let ErrorT = false
    try {
        const hasedPassword = await bcrypt.hash(password, 10);

        await adminModel.create({
            email,
            password: hasedPassword,
            fname,
            lname
        });
    } catch (e) {
        res.status(409).json({
            message: "User already Exists"
        })
        ErrorT = true;
    }

    if (!ErrorT) {
        res.json({
            message: "You are signed up"
        })
    }
})

adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email
    })

    const passwordMatch = await bcrypt.compare(password, admin.password);
    console.log(admin)
    if (admin && passwordMatch) {
        const token = jwt.sign({ id: admin._id.toString() }, SECRET_KEY_ADMIN);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

adminRouter.post("/course", adminMiddleware, async (req, res) => {
    const adminId = req.userId;
    const { title, description, price, imageURL } = req.body;
    const course = await courseModel.create({
        title,
        description,
        price,
        imageURL,
        creatorId: adminId
    })
    res.status(201).json({
        messsage: "Course Created",
        courseDetails: course
    })
})

adminRouter.put("/course/:id",adminMiddleware,async (req, res) => {
    const adminId = req.userId;
    const courseId = req.params.id;
    const { title, description, price, imageURL } = req.body;
    const course = await courseModel.findOneAndUpdate({
        _id:courseId,
        creatorId:adminId
    },{
        title,description,price,imageURL,creatorId:adminId
    });
    res.status(200).json({
        message:"Succesfully Updated",
        updatedData:course
    })
})

adminRouter.get("/course/bulk",adminMiddleware,async (req, res) => {
    const adminId = req.userId;
    const courses = await courseModel.find({creatorId:adminId});
    console.log(courses)
    res.status(202).json({
        message:"Done",
        courses:courses
    })
})


module.exports = {
    adminRouter: adminRouter
}
const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET_KEY_USER } = require("../constants")

const { userModel } = require("../models/user");
const { purchaseModel } = require("../models/purchase");
const { courseModel } = require("../models/course");
const { userMiddleware } = require("../middlewares/user");

const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
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

        await userModel.create({
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

userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email
    })

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(user)
    if (user && passwordMatch) {
        const token = jwt.sign({ id: user._id.toString() }, SECRET_KEY_USER);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

userRouter.get("/purchases", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId : userId
    })
    const coursesData = await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId) }
    });
    res.status(202).json({
        message:"Data Fetched",
        courses:coursesData
    })
})

module.exports = {
    userRouter: userRouter
}
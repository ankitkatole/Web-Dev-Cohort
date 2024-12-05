const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {SECRET_KEY_ADMIN} = require("../constants")

const {adminModel} = require("../models/admin");

const {Router} = require("express");
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
    const {email,password} = req.body;

    const admin = await adminModel.findOne({
        email:email
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

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        messsage:"Working"
    })
})
adminRouter.put("/course", (req, res) => {
    res.json({
        messsage:"Working"
    })
})
adminRouter.post("/course", (req, res) => {
    res.json({
        messsage:"Working"
    })
})

module.exports = {
    adminRouter: adminRouter
}
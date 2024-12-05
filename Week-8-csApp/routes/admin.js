const {Router} = require("express");

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
    res.json({
        messsage:"Working"
    })
})

adminRouter.post("/signin", (req, res) => {
    res.json({
        messsage:"Working"
    })
})

adminRouter.get("/course", (req, res) => {
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
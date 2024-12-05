const {Router} = require("express");
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

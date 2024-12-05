const { SECRET_KEY_USER } = require("../constants")
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, SECRET_KEY_USER);
    if (decoded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: "You are nit Signed in"
        })
    }
}

module.exports = {
    userMiddleware
}
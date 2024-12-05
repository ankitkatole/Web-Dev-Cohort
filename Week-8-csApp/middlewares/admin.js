const { SECRET_KEY_ADMIN } = require("../constants")
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, SECRET_KEY_ADMIN);
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
    adminMiddleware
}
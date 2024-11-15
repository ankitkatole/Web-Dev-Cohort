const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretkey = process.env.SECRET_KEY;

function auth(req, res, next) {
    const token = req.headers.token;

    const response = jwt.verify(token, secretkey);

    if (response) {
        req.userId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    secretkey
}
require('dotenv').config();

const PORT = process.env.PORT;
const SECRET_KEY_USER = process.env.SECRET_KEY_USER;
const SECRET_KEY_ADMIN = process.env.SECRET_KEY_ADMIN;
const URI = process.env.DB_URL;

module.exports = {PORT,SECRET_KEY_ADMIN,SECRET_KEY_USER,URI}
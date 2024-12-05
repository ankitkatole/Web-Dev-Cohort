require('dotenv').config();

const PORT = process.env.PORT;
const SECRETKEY = process.env.SECRET_KEY;
const URI = process.env.DB_URL;

module.exports = {PORT,SECRETKEY,URI}
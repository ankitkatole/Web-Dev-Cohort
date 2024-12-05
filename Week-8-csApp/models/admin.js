const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId;

const Admin = new mongoose.Schema({
    fname : String,
    lname : String,
    email : {
        type:String,
        unique: true,
        required: true
    },
    password:String,
    courseID:ObjectId
})

const adminModel = mongoose.model('admin',Admin);
module.exports={
    adminModel
}
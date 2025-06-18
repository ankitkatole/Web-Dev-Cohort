const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fname : String,
    lname : String,
    email : {
        type:String,
        unique: true,
        required: true
    },
    password:String,
})

const userModel = mongoose.model('user',User);
module.exports={
    userModel
}
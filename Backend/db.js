const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String,
        required: true,
        unique: true},
    password: String,
    name: String
})

const Todo = new Schema({
    title:String,
    status:Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports={
    UserModel,
    TodoModel    
}
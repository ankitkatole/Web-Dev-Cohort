const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId;

const Course = mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageURL:String,
    creatorID :ObjectId
})

const courseModel =mongoose.model("course",Course);

module.exports ={
    courseModel
}
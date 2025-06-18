const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId;

const Purchase = new mongoose.Schema({
    courseId:ObjectId,
    userId:ObjectId
})

const purchaseModel = mongoose.model("purchase",Purchase);

module.exports={
    purchaseModel
}
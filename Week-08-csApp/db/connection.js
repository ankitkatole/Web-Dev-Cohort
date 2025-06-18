const mongoose = require("mongoose");
const {URI} = require("../constants")

const connectDB = async ()=>{
    mongoose.connect(URI.toString())
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));
}

module.exports = {connectDB}
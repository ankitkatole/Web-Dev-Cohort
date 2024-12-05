const express = require("express");
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const {PORT} = require("./constants")
const app = express();
const {connectDB} = require("./db/connection")

//Connecting to DB
connectDB();

app.use("/admin",adminRouter)
app.use("/user",userRouter);
app.use("/course",courseRouter);

app.listen(PORT,()=>{
    console.log("Listening on PORT:",PORT);
});
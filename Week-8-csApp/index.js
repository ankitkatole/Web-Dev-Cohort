const express = require("express");
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

const app = express();

app.use("/admin",adminRouter)
app.use("/user",userRouter);
app.use("/course",courseRouter);

app.listen(3000,()=>{
    console.log("Listening on PORT");
});
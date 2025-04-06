import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ContentModel, UserModel } from './db';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from './config';
import { userMiddleware } from './middleware';
const app = express();

app.use(express.json());




app.post("/api/v1/signup", async (req, res) => {
    // TODO: Use zod or a similar library for input validation.
    // TODO: Hash the password before storing it in the database.
    const { username, password } = req.body;

    try {
        // Create a new user with the provided username and password.
        await UserModel.create({ username, password });
        res.json({ message: "User signed up" }); // Send success response.
    } catch (e) {
        // Handle errors like duplicate usernames.
        res.status(409).json({ message: "User already exists" }); // Conflict status.
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find a user with the provided credentials.
    const existingUser = await UserModel.findOne({ username, password });
    if (existingUser) {
        // Generate a JWT token with the user's ID.
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
        res.json({ token }); // Send the token in response.
    } else {
        // Send error response for invalid credentials.
        res.status(403).json({ message: "Incorrect credentials" });
    }
});

//@ts-ignore
app.post("/api/v1/content",userMiddleware, async(req, res) => {
    const {link,type,title} = req.body;
    await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId,
        tags:[]
    })
    res.json({ message: "Content created" }); // Send success response.
});

app.get("/api/v1/content", async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userid: userId
    }).populate("userId","username"); // Get all content for the user.
    res.json(content); // Send success response.
});

app.delete("/api/v1/content", async(req, res) => {
    const { id } = req.body;
    ContentModel.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: "Content deleted" }); // Send success response.
        }
        ).catch((err) => {
            res.status(500).json({ message: "Error deleting content" }); // Send error response.
        }
        );
});

app.post("/api/v1/brain/share", (req, res) => {

});

app.get("/api/v1/brain/shareLink", (req, res) => { });

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
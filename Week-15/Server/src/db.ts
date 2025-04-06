import mongoose,{ model, Schema } from 'mongoose';

mongoose.connect("mongodb://localhost:27017/Brainly")

const userSchema = new Schema({
    
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = model('User', userSchema);

const ContentSchema = new Schema({
    title:String,
    link: String,
    tags:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true}, 
})

export const ContentModel = model('Content', ContentSchema);
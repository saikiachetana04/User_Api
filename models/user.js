const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, 
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String, //ideally it should be enum but for now we are keeping it as string
    }
}, {timestamps : true}); //This is our schema now we need to make the Model

//Model
const User = mongoose.model("user", userSchema); //This is our model, Now using this User class we can interact with our mongo

module.exports = User;
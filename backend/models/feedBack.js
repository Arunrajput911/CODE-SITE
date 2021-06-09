const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})


const feedBack = mongoose.model('feedBack',feedbackSchema);

module.exports = feedBack;
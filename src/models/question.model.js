const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Topic cannot be Empty."],
    },
    body: {
        type: String,
        required: [true, "Body of the Question Cannot be Empty."]
    },
    topics: [{
        type: String
    }],
    user_id: {
        type: Number,
        required: [true, "user_id can not be Empty."]
    },
    liked_by:[{
        type:Number,
        required:[true,"User_id can not be empty"]
    }]
}, {
    timestamps: true
})

const questionModel = new mongoose.model('Question', questionSchema);

module.exports = questionModel;
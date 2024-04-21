const mongoose = require('mongoose');


const answerSchema = new mongoose.Schema({
    question_id: {
        type: Number,
        required: [true, "question_id cannot be Empty."],
    },
    body: {
        type: String,
        required: [true, "Body of the Answer Cannot be Empty."]
    },
    user_id: {
        type: Number,
        required: [true, "user_id can not be Empty."]
    },
    liked_by: [{
        type: Number,
        required: [true, "User_id can not be empty"]
    }]
}, {
    timestamps: true
})

const answerModel = new mongoose.model('Answer', answerSchema);

module.exports = answerModel;
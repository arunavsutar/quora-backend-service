const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    parent_id: {
        type: Number,
        required: [true, "parent_id cannot be Empty."],
    },
    parent: {
        type: String,
        enum: ['answer', 'comment']
    },
    body: {
        type: String,
        required: [true, "Body of the Answer Cannot be Empty."]
    },
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

const commentModel = new mongoose.model('Comment', commentSchema);

module.exports = commentModel;
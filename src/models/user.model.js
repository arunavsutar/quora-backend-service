const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name can not be Empty."]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email can not be Empty."]

    },
    bio: {
        type: String
    },
    followed_by:[{
        type:Number,
        required:[true,"User_id can not be empty"]
    }]
});

const userModel = new mongoose.model('User', userSchema);

module.exports = userModel;
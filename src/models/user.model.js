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
    }
});

const userModel = new mongoose.model('User', userSchema);

module.exports = userModel;
const mongoose = require('mongoose');


const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Topic cannot be Empty."],
        unique: true
    }
})

const topicModel = new mongoose.model('Topic', topicSchema);

module.exports = topicModel;
const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message: String,
    timestamp: Date,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message
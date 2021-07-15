const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message: String,
    timestamp: String,
});

messageSchema.index({name: 'text', message:'text'});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message
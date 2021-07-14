const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message: String,
    timestamp: Date,
});

messageSchema.index({name: 'text', message:'text'});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message
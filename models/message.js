import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    message: String,
    timestamp: String,
});

messageSchema.index({ name: 'text', message: 'text' });

const Message = mongoose.model("Message", messageSchema);

export default Message
const Message = require("../models/message");
const moment = require('moment');

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find()
        res.send(messages)
    } catch (e) {
        res.status(404).send({ message: e.message })
    }

};

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body

        const newMessage = new Message({
            message,
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss')
        })
        await newMessage.save();
        res.send(newMessage)

    } catch (e) {
        res.status(404).send({ message: e.message })
    }
};

const searchMessage = async (req, res) => {
    try {
        const searchMessage = { $text: { $search: req.body.message } }
        console.log(req.body)
        const searchMessages = await Message.find(searchMessage)
        res.send(searchMessages)

    } catch (e) {
        res.status(404).send({ message: e.message })
    }
};

module.exports = { getMessages, sendMessage, searchMessage };




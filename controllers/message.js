import Message from "../models/message"
import moment from 'moment'
import { io } from "../socketio";

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


        io.sockets.emit("message", newMessage)
        res.send(newMessage)

    } catch (e) {
        res.status(404).send({ message: e.message })
    }
};

const searchMessage = async (req, res) => {
    try {
        const searchMessage = { $text: { $search: req.body.message } }
        const searchMessages = await Message.find(searchMessage)
        res.send(searchMessages)

    } catch (e) {
        res.status(404).send({ message: e.message })
    }
};

export { getMessages, sendMessage, searchMessage };




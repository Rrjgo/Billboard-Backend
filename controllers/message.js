
let state = []

const getMessage = async (req, res) => {
    res.send(state)
};

const sendMessage = async (req, res) => {
    const { message } = req.body

    state.push({ message: message, timestame: new Date() })
    res.send(state)

};

module.exports = {getMessage,sendMessage};




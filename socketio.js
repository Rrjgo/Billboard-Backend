
const socketIO = require("socket.io")

const startSocketIO = (httpServer) => {
    const io = socketIO(httpServer, {
        cors: {
            origin: '*',
        },
    });

    io.on("connection", socket => {
        console.log(socket.id)
    });

    module.exports.io = io
}

module.exports.startSocketIO = startSocketIO
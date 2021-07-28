import socketIO from "socket.io"
import http from 'http'
import express from 'express'

const app = express();
const httpServer = http.createServer(app);

const io = socketIO(httpServer, {
    cors: {
        origin: '*',
    },
});

io.on("connection", socket => {
    console.log(socket.id)
});

export { httpServer, app, io }
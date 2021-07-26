require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const messageRoutes = require('./routes/message')

const app = express();
const port = process.env.PORT || 8000;

//connect to mongodb
mongoose.connect(process.env.MONGOOSE_URL || "" ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open',() => {})

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
      origin: '*',
    },
});

io.on("connection", socket => {
  console.log(socket.id)
});

//defult page
app.get('/', (req, res) => {
  res.send('Billboard-backend')
});

//send and post message page
app.use("/msg",messageRoutes)


httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
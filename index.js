require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const { startSocketIO } = require('./socketio')
const messageRoutes = require('./routes/message')

const app = express();
const port = process.env.PORT || 8000;

//connect to mongodb
mongoose.connect(process.env.MONGOOSE_URL || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => { })

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const httpServer = require("http").createServer(app);

startSocketIO(httpServer)


//defult page
app.get('/', (req, res) => {
  res.send('Billboard-backend')
});


app.get('/socket', (req, res) => {

  res.send('Billboard-backend')
});

//send and post message page
app.use("/msg", messageRoutes)


httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

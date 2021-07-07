require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const messageRoutes = require('./routes/message')

const app = express();
const port = 8000;

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



app.get('/', (req, res) => {
  res.send('Billboard-backend')
});

app.use("/msg",messageRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
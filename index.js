import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { app, httpServer } from './socketio'
import messageRoutes from './routes/message'

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
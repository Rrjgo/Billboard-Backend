const express = require('express')

const messageRoutes = require('./routes/message')

const app = express();
const port = 8000;


app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) => {
  res.send('Billboard-backend')
});

app.use("/msg",messageRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
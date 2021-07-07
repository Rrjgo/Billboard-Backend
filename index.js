const express = require('express')
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/test', (req, res) => {
  res.send('test')
});

let state = []

app.get('/msg', (req, res) => {
  res.send(state)
});

app.post('/msg', (req, res) => {
  console.log(req.body)
  state.push({message:req.body.message, timestame:new Date()})
  res.send(state)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
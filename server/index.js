const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const axios = require('axios');
const io = require('socket.io')(3001, {
  cors: {origin: 'http://localhost:3000'},
  methods: ['GET', 'POST']
});

app.use(express.static(__dirname + '/../client/public'));

app.get('/quotes', (req, res) => {
  axios.get('https://inspiration.goprogram.ai')
    .then(response => {
      res.send(response.data).status(200);
    })
    .catch(err => {
      console.log('server err:', err);
      res.send(err).status(500);
    })
})

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}!`);
})

io.on('connection', (socket) => {
  socket.on('send', data => {
    socket.broadcast.emit('receive', data);
  })
});
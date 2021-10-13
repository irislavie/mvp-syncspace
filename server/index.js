const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const io = require('socket.io')(3001, {
  cors: {origin: 'http://localhost:3000'},
  methods: ['GET', 'POST']
});

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}!`);
})

io.on('connection', () => {
  console.log('a user connected!');
});
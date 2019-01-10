const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use('/', express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'gigi',
        text: 'hi dude',
        createdAt: 1212323
    });

    socket.on('createMassage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
});

server.listen(port, () => {
    console.log(`App started on port ${port}`)
});

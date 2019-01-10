var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMassage', {
            from: 'alex',
            text: 'this is from alunu'
        })
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage' + message);
});
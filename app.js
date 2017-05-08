var express = require('express');

var http = require('http');

var app = express();

var server = http.createServer(app).listen(9000);

var io = require('socket.io')(server);

app.use(express.static('./public'));

io.on('connection', function(socket){
    socket.on('chat', function(message){
        socket.broadcast.emit('message', message);
    });

    // On successful connection
    socket.emit('message', 'Socket.io initialized');
});

console.log('Server listening to port 9000');
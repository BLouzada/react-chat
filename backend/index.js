var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (client) {
    console.log('Client online...');
    io.emit('user.online', { id: client.id });
    client.on('disconnect', function () {
        console.log('Client offline...');
        io.emit('user.ofline', { id: client.id });
    });
})

app.use(express.static("../build/"));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(4200)
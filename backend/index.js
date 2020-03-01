var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var allClients = []


io.on('connection', function (client) {
    console.log('Client online...');
    
    allClients.push(client.id);

    io.emit('user.online', { id: client.id, clients: allClients });
   
    client.on('disconnect', function () {
        console.log('Client offline...');
        let indexOf = allClients.indexOf(client.id);
        allClients.splice(indexOf, 1)
        io.emit('user.offline', { id: client.id });
    });
   
    client.on('send.message', function (data) {
        console.log('Client', client.id ,'sent message', data);
        io.emit('message.from.user', {
            userId: client.id,
            message: data
        })
    });
})

app.use(express.static("../build/"));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(4200)
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var loggedUsers = []

io.on('connection', function(client) {
    console.log('Socket client connected');
    
    client.on('registerNewUser', function(userName) {
      console.log("New login: " + userName);
      var user = {
        id: client.id,
        name: userName
      }
      loggedUsers.push(user)
      client.emit('user.login');
      io.emit('user.online', {loggedUsers: loggedUsers});
    });

    client.on('changeColor', function(newColor) {
      console.log('mudando cor', newColor);
    });

    client.on('disconnect', function() {
      console.log('Socket client disconnected');
      var userToDisconnect = findLoggedUserById(client.id)
      if (!userToDisconnect) return
      console.log("New logoff: " + userToDisconnect.name)
      loggedUsers.splice(loggedUsers.indexOf(userToDisconnect), 1)
      client.emit('user.logoff');
      io.emit('user.offline', {loggedUsers: loggedUsers});
    });
})

function findLoggedUserById(id) {
  return loggedUsers.find(user => user.id === id)
}

app.use(express.static("../build/"));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(4200)
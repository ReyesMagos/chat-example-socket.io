var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile('/Users/oscargallon/Documents/Developer/Node/Socket.Io/chat-example/index.html');
});

io.on('connection', function(socket) {
    console.log('usuario conectado: ' + socket.id);

    socket.on('culo',function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

	
  	


});

http.listen(7000, function() {
    console.log('listening on *:7000');
});
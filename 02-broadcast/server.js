var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(5000);

io.on('connection', function(socket) {
	var alert = 'Hello from the server' + Math.random();
	socket.emit('alert', alert);

	socket.on('disconnect', function() {
		console.log('client disconnected');
	});

	// Broadcast when the message 'color' is received
	socket.on('color', function(data) {
		socket.broadcast.emit('color', 'orange');
	});
});
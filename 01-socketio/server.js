var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(5000);

io.on('connection', function(socket) {
	var alert = 'hello world ' + Math.random();
	socket.emit('alert', alert);

	socket.on('click', function(data) {
		console.log(data);
	});

	socket.on('disconnect', function() {
		console.log('A client disconnected');
	});
});
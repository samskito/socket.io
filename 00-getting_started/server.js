var WebSocketServer = require('ws').Server; // from npm install
var http = require('http');
var port = process.env.PORT || 5000;
var server = http.createServer();

server.listen(port)

// Create the websocket
var wss = new WebSocketServer({
	server: server
});

console.log('websocket server created');

// When the connection opens
wss.on('connection', function(ws) {
	console.log('websocket connection open');

	// On message from the client
	ws.on('message', function(message) {
		console.log('message recieved: ' + message);
	});

	// When the connection closes
	ws.on('close', function() {
		console.log('websocket connection closed');
		clearInterval(id); // Stop a timer that was previously created with setInterval.
	});

	// Object created when connection starts
	var id = setInterval(function() {
		var message = 'ping from server: ' + new Date()
		ws.send(message, function(){});
	}, 1000);
});
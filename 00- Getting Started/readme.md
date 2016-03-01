#Introduction to socket.io
## From the [Youtube Video](https://www.youtube.com/watch?v=nN6gFQMr3yU) Getting started with socket.io
---

Socket.io is a JavaScript library for realtime web apps

### Install 
* npm install socket.io

### API
* **socket.emit[{String} messageName, {Object} data]**
	* Emits a message
	* ```
	socket.emit('myData', {
		key: 'My value'
	});```

* **socket.on[{String} messageName, {Function} callback]**
	* Listens for a message to be sent
	* ```
	socket.on('myData', function(data) {
		console.log(data.key);
	});```

* **socket.send({Object} data)**
	* A quick alternative for the emit method. The message's name will always be _message_
	* ```
	socket.send('Hello world');
	```

* **socket.set[{String} name, {Object} data, {Function} callback]**
	* Setter 
	* ```
	socket.set('myData', 'My Value', function() {
		console.log('myData set!');
	});
	```

* **socket.get[{String} name, {Function} callback]**
	* Getter 
	* ```
	socket.get('myData', function(err, data) {
		console.log(data);
	});
	```

* **socket.broadcast.emit({String} messageName, {Object} data)** 
	* Broadcast a message 
	* ```
	socket.broadcast.emit('myData', {
		key: 'My value'
	});
	```

* **Namespacing**
	* Server side :
		* ```
		var io = require('socket.io').listen(80);
		var task = io.of('customNamespace').on('connection', function(socket) {
			task.emit('myData', {});
		});
		```
	* Client side :
		* ```
		var client = io.connect('http://localhost/customNamespace');
		client.on('connect', function() {
			client.on('myData', function(data) {
				console.log(data)
			});
		});
		```
---

## Emit types from this [question](http://stackoverflow.com/questions/10058226/send-response-to-all-clients-except-sender-socket-io) : Send response to all clients except sender

**// sending to sender-client only**
`socket.emit('message', "this is a test");`

**// sending to all clients, include sender**
`io.emit('message', "this is a test");`

**// sending to all clients except sender**
`socket.broadcast.emit('message', "this is a test");`

**// sending to all clients in 'game' room(channel) except sender**
`socket.broadcast.to('game').emit('message', 'nice game');`

**// sending to all clients in 'game' room(channel), include sender**
`io.in('game').emit('message', 'cool game');`

**// sending to sender client, only if they are in 'game' room(channel)**
`socket.to('game').emit('message', 'enjoy the game');`

**// sending to all clients in namespace 'myNamespace', include sender**
`io.of('myNamespace').emit('message', 'gg');`

**// sending to individual socketid**
`socket.broadcast.to(socketid).emit('message', 'for your eyes only');`

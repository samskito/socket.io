#Getting started with socket.io
## From the [Youtube Video](https://www.youtube.com/watch?v=nN6gFQMr3yU)
---

Socket.io is a JavaScript library for realtime web apps

### Install 
npm install socket.io

### API
* socket.emit[{String} messageName, {Object data}]
	* ```javascript
	socket.emit('myData', {
		key: 'My value'
	});

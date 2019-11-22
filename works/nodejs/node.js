const net = require('net')

const server = net.createServer( (socket) => {
	socket.on('data',function(data){
		console.log(data.toString())

		socket.end()
	})
})


server.listen({
	port:8000
})
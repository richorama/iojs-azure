var http = require('http');

var server = http.createServer(function(req, res){
	res.end(process.version)
});

server.listen(process.env.PORT || 8080);
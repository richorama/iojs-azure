var http = require('http');

http.createServer(function(req, res){
	res.end(process.version)
});

app.listen(process.env.PORT || 8080);
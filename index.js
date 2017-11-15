const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	var fileName, contentType;
	if (req.url == '/sale.gif') {
		fileName = 'sale.gif';
		contentType = 'image/gif';
	} else {
		fileName = 'sale.htm';
		contentType = 'text/html';
	}
	fs.readFile(fileName, 'binary', (err, data) => {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end(err.message);
		} else {
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(data, 'binary');
		}
	});
}).listen(3001);
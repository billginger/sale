const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
	var fileName, contentType;
	if (req.url == '/sale.gif') {
		fileName = 'sale.gif';
		contentType = 'image/gif';
	} else {
		fileName = 'sale.htm';
		contentType = 'text/html';
	}
	fs.readFile(path.join(__dirname, fileName), 'binary', (err, data) => {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end(err.message);
		} else {
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(data, 'binary');
		}
	});
}).listen(3001);
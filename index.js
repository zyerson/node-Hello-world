const http = require('http');
http.createServer((request, response) => {
    response.write("helo word servi");
    response.end();

}).listen(8080);
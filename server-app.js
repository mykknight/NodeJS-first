const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Mayank');
    res.write('Mayank');
    res.end();
});

server.listen(4000);
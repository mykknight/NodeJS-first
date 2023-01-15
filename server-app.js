const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    if(url == '/') {
        fs.readFile('message.txt', (err,data) => {
        console.log(1);
        res.write('<html>');
        res.write('<head><title>Enter details</title></head>');
        res.write(`<div> ${data} </div>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">SEND</button></form></body>')
        res.write('</html>');
        return res.end();
        });
    }

    else if(url == '/message' && method=='POST'){
        const bd = [];
        req.on('data', (chunk) => {
            bd.push(chunk);
            console.log(chunk);
        });

        return req.on('end', () => {
            const parsebd = Buffer.concat(bd).toString();
            const msg = parsebd.split('=')[1];
            console.log(msg);
            fs.writeFile('message.txt', msg, err => {
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
            });
        });
    }

    // if(url == '/home'){
    //     res.write('<html>');
    //     res.write('<head><title>Home</title></head>');
    //     res.write('<body><h1>Welcome Home</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }

    // else if(url == '/about'){
    //     res.write('<html>');
    //     res.write('<head><title>About</title></head>');
    //     res.write('<body><h1>Welcome to About Us page</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }
    // else if(url == '/node'){
    //     res.write('<html>');
    //     res.write('<head><title>Node</title></head>');
    //     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }

    // else{
    //     res.write('<html>');
    //     res.write('<head><title>Nothing</title></head>');
    //     res.write('<body><h1>Nothing happened</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }

    //console.log(req.method);
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title> My First Page</title></head>');
    // res.write('<body><h1>Hello from my node server</h1></body>');
    // res.write('</html>');
    // res.end();
});

server.listen(4000);
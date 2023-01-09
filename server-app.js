const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    // if(url == '/') {
    //     res.write('<html>');
    //     res.write('<head><title>Enter details</title></head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">SEND</button></form></body>')
    //     res.write('</html>');
    //     res.end();
    // }

    if(url == '/home'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }

    else if(url == '/about'){
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if(url == '/node'){
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    }

    else{
        res.write('<html>');
        res.write('<head><title>Nothing</title></head>');
        res.write('<body><h1>Nothing happened</h1></body>');
        res.write('</html>');
        res.end();
    }

    //console.log(req.method);
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title> My First Page</title></head>');
    // res.write('<body><h1>Hello from my node server</h1></body>');
    // res.write('</html>');
    // res.end();
});

server.listen(4000);
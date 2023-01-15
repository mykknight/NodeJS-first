const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if(url == '/') {
        return fs.readFile('message.txt', (err,data) => {
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

};

//module.exports.handler = requestHandler;

//module.exports.someText = "this is connecting ideas";

//exports.newway = "also use direct exports.";

module.exports = {
    handler: requestHandler,
    someText: "this is connecting idea"
};

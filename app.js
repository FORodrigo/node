const express = require('express');

cons app = express ();

const http = require('http');
const { runInNewContext } = require('vm');

http.createServer(function (req, res){
    // Cuerpo del callback
    res.writeHead(200, {"Content-Type": "text/plain"});

    if(req.url == '/'){
    res.end('Mi primer server con Node');
    }
    if(req.url == '/saludo'){

        res.end('Hola! Estamos en localhost:3030/saludo')
    }

}).listen(3030, 'localHost');
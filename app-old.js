// http ya viene con Nodejs
const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Constent.Type': 'application-json' });

        let salida = {
            nombre: 'Carlos',
            edad: 43,
            url: req.url
        };

        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('escuchando puerto 8080');
const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; // esto lo hacemos para que heroku nos pase de la variable de entorno el puerto. En local no existe, por eso le ponemos 3000

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos'
    }); // renderiza la pagina home.hbs

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}...`);
});
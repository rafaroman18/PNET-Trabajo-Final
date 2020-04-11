const express = require('express');
const app = express();
const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const baseAPI = '/api/v1';
const cors = require('cors');
const dotenv = require('dotenv');
const asistentes = require('./routes/asistentes');
const asistentesService = require('./routes/asistentes-service');


app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
dotenv.config();

//Ruta ASISTENTES
app.use('/asistentes', asistentes);

//METODO GET PAGINA PRINCIPAL
app.get('/', function(req, res) {
    res.send('Hello World!');
});

//Primero inicializamos la base de datos
asistentesService.connectDb(function(err) {
    if (err) {
        console.log('Could not connect with MongoDB - asistentesService')
        process.exit(1);
    }


    //SERVIDOR ESCUCHANDO
    const server = http.createServer(app);

    server.listen(PORT, function() {
        console.log('Server Up and Running on localhost: ' + PORT)
    })
});
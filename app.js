//  Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar Variables
var app = express();


// Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/hospitalDB', ( err, res) => {
    if ( err ) throw err;

    console.log(('Base de datos online'));

})

// Rutas

app.get('/', (req, res, next) => {

    res.status( ).json({

        ok: true,
        mensaje: 'Pertion realizada correctamente'

    });
});


// Escuchar perticiones;

app.listen(3000, () => {
    console.log(('Express server puerto 3000:','\x1b[32m', '\x1b[1m','online'));
});
var express = require('express')
var app = express();
var Beacons = require('./beacons')
var bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json())

//Detiene el beacon si está activo.
app.delete('/beacon', (req, res) => {
    var exito = Beacons.EddystoneBeacon.stop();
    if (exito) {
        res.status(200).send('Beacon parado')
    } else {
        res.status(409).send('No hay ningun beacon activo')
    }
})

//Crea el beacon si no está activo.
app.post('/beacon', (req, res) => {

    var configuration = req.body;
    if (configuration.namespaceID && configuration.instanceID) {
        var exito = Beacons.EddystoneBeacon.advertiseUID(configuration.namespaceID, configuration.instanceID, configuration.options)

        if (exito) {
            res.status(201).send('Beacon activo!')
        } else {
            res.status(409).send('Ya hay un beacon activo, debes pararlo antes de activar otro: DELETE /beacon')
        }
    } else {
        res.status(400).send('Bad request, los campos: namespaceID y instanceID son obligatorios');
    }
})

app.get('*', (pet, res) => {
    res.status(200)
    res.send('Esto tira')
})

app.listen(PORT, () => console.log('Servidor express en el puerto: ' + PORT))

var express = require('express')
var app = express();
var Beacons = require('./beacons')
var bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json())

//Crea el beacon si no está activo.
app.post('/beacon', (req, res) => {

    var configuration = req.body;
    if (configuration.namespaceID && configuration.instanceID) {

        Beacons.EddystoneBeacon.getInstance().advertiseUid(configuration.namespaceID, configuration.instanceID, configuration.options)

        res.status(201).send('Beacon activo!')

    } else {
        res.status(400).send('Bad request, los campos: namespaceID y instanceID son obligatorios')
    }
})

//Detiene el beacon si está activo.
app.delete('/beacon', (req, res) => {
    Beacons.EddystoneBeacon.getInstance().stop()
    res.status(200).send('Beacon parado')
})

app.get('*', (pet, res) => {
    res.status(200)
    res.send('Esto tira')
})

app.listen(PORT, () => console.log('Servidor express en el puerto: ' + PORT))

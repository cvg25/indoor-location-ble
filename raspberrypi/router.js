var express = require('express')
var router = express.Router()
import { EddystoneBeacon } from './eddystoneBeacon'

//Crea el beacon si no está activo.
router.post('/beacon', (req, res) => {

    var configuration = req.body;
    if (configuration.namespaceID && configuration.instanceID) {
        var exito = EddystoneBeacon.advertiseUID(configuration.namespaceID, configuration.instanceID, configuration.options)

        if (exito) {
            res.status(201).send('Beacon activo!')
        } else {
            res.status(409).send('Ya hay un beacon activo, debes pararlo antes de activar otro: DELETE /beacon')
        }
    } else {
        res.status(400).send('Bad request, los campos: namespaceID y instanceID son obligatorios');
    }
})

//Para el beacon si está activo.
router.delete('/beacon', (req, res) => {
    var exito = EddystoneBeacon.stop();
    if (exito) {
        res.status(200).send('Beacon parado')
    } else {
        res.status(409).send('No hay ningun beacon activo')
    }
})
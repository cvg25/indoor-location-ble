var eddystoneBeacon = require('eddystone-beacon');
var express = require('express')
var app = express();
const PORT = 3000;

app.get('*', (pet, res) => {
    res.status(200)
    res.send('Esto tira')
})

app.listen(PORT, () => console.log('Servidor express en el puerto: ' + PORT))

var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';

var options = {
    name: 'cvg-beacon', // set device name when advertising (Linux only)
    txPowerLevel: -22,  // override TX Power Level, default value is -21,
};

eddystoneBeacon.advertiseUid(namespaceId, instanceId, options);
console.log("Advertising...")

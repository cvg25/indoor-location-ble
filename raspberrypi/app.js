var eddystoneBeacon = require('eddystone-beacon');

var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';

var options = {
    name: 'cvg-beacon', // set device name when advertising (Linux only)
    txPowerLevel: -22,  // override TX Power Level, default value is -21,
};

eddystoneBeacon.advertiseUid(namespaceId, instanceId, [options]);
console.log("Advertising...")

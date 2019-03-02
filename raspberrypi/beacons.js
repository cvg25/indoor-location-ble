/* 
var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';

var options = {
    name: 'cvg-beacon', // set device name when advertising (Linux only)
    txPowerLevel: -22,  // override TX Power Level, default value is -21,
};
*/

//Patron singleton eddystone beacon
exports.EddystoneBeacon = (() => {
    var eddystoneBeaconInstance

    return {
        advertiseUID: (namespaceID, instanceID, options) => {
            if (!eddystoneBeaconInstance) {
                eddystoneBeaconInstance = require('eddystone-beacon')
                return eddystoneBeaconInstance.advertiseUid(namespaceID, instanceID, options)
            } else {
                return null
            }
        },
        stop: () => {
            if (eddystoneBeaconInstance) {
                return eddystoneBeaconInstance.stop()
            } else {
                return null
            }
        }
    }
})();



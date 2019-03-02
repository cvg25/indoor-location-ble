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
    var instance

    function createInstance() {
        var eddystoneBeaconInstance = require('eddystone-beacon')
        return eddystoneBeaconInstance;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }

})();



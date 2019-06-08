'use strict';

/**
 * Client options
 *
 * @readonly
 * @property {string} host=192.168.1.255 - GREE device ip-address
 * @property {number} port=7000 - GREE device UDP port
 * @property {number} connectTimeout=3000 - Reconnect to device if no success timeout
 * @property {boolean} autoConnect=true - Automatically connect to device when client is created. Alternatively method `connect()` can be used.
 * @property {boolean} poll=true - Poll device properties
 * @property {number} pollingInterval=3000 - Device properties polling interval
 * @property {boolean} debug=false - Trace debug information
 */
const CLIENT_OPTIONS = {
    host: '192.168.1.255',
    port: 7000,
    connectTimeout: 3000,
    autoConnect: true,
    poll: true,
    pollingInterval: 3000,
    debug: false
};

module.exports = {
    CLIENT_OPTIONS,
};
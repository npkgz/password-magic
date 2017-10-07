const _api = {};

// expose API functions
_api.pin = require('./lib/types/pin');
_api.numbers = require('./lib/types/numbers');
_api.humanShort = require('./lib/types/human-short');
_api.internet = require('./lib/types/internet');
_api.server = require('./lib/types/server');
_api.token = require('./lib/types/token');

module.exports = _api;
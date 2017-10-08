const _random = require('../random');
const _cc = require('../character-classes');

// alias
const _ = _random.getRandomElementsByClass;

async function server(length){
    // defaults
    length = length || 20;

    return ''
        + await _(_cc.general, 1)
        + await _(_cc.all, length-1)
    ;
}

module.exports = server;

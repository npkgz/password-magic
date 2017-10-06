const _random = require('../random');
const _cc = require('../character-classes');

// alias
const _ = _random.getRandomElementsByClass;

function server(length){
    // defaults
    length = length || 20;

    return ''
        + _(_cc.general, 1)
        + _(_cc.all, length-1)
    ;
}

module.exports = server;

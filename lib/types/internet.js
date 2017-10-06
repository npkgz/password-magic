const _random = require('../random');
const _cc = require('../character-classes');
const _shuffle = require('../shuffle');

// alias
const _ = _random.getRandomElementsByClass;

function createBasicScheme(){
    return ''
        + _(_cc.general, 4)
        + _(_cc.numbers, 2)
        + _(_cc.special, 2)
        + _(_cc.general, 6)
        + _(_cc.numbers, 2)
        + _(_cc.special, 2)
        + _(_cc.numbers, 3)
    ;
}

function internet(length, shuffle){
    // defaults
    length = length || 22;
    shuffle = shuffle || false;

    // tmp
    let output = '';

    // generate passphrase
    while (output.length < length){
        output += createBasicScheme();
    }

    // limit length
    output = output.substr(0, length);

    // shuffle elements ?
    if (shuffle){
        // to array -> shuffle -> to string
        output = _shuffle(output.split('')).join('');
    }

    return output;
}

module.exports = internet;

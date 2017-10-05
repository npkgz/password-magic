const _random = require('../random');
const _cc = require('../character-classes');

// alias
const _ = _random.getRandomElementsByClass;

function shortHumanPassword(){
    return ''
         + _(_cc.words, 1).toLowerCase()
         + _(_cc.numbers, 1)
         + _(_cc.words, 1)
         + _(_cc.special, 1)
         + _(_cc.words, 1).toLowerCase()
         + _(_cc.special, 1)
         + _(_cc.numbers, 2)         
         + _(_cc.general, 2)
    ;
}

module.exports = shortHumanPassword;

const _random = require('../random');
const _cc = require('../character-classes');

// alias
const _ = _random.getRandomElementsByClass;

async function shortHumanPassword(){
    return ''
         + (await _(_cc.words, 1)).toLowerCase()
         + await _(_cc.numbers, 1)
         + await _(_cc.words, 1)
         + await _(_cc.special, 1)
         + (await _(_cc.words, 1)).toLowerCase()
         + await _(_cc.special, 1)
         + await _(_cc.numbers, 2)
         + await _(_cc.general, 2)
    ;
}

module.exports = shortHumanPassword;

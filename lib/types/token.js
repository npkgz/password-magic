const _random = require('../random');
const _cc = require('../character-classes');

function randomToken(length){
    // length set ?
    length = length || 20;

    // get N random numbers
    return _random.getRandomElementsByClass(_cc.alpha, length);
}

module.exports = randomToken;
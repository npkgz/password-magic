const _random = require('../random');
const _cc = require('../character-classes');

function randomNumbers(length){
    // length set ?
    length = length || 8;

    // get N random numbers
    return _random.getRandomElementsByClass(_cc.numbers, length);
}

module.exports = randomNumbers;
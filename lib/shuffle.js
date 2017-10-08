const _random = require('./random');

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
async function shuffle(input){

    for (let i=input.length-1;i>0;i--){
        const j = await _random.randomIntInRange(0, i);

        // exchange elements
        const t = input[j];
        input[j] = input[i];
        input[i] = t;
    }

    return input;
}


module.exports = shuffle;
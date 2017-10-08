const _crypto = require('crypto');
const _asyncMagic = require('async-magic');

// async random function
const _randomBytes = _asyncMagic.promisify(_crypto.randomBytes, 'randomBytes');

// generate random unsigned integer (32bit)
async function randomUInt32(){
  
    // get 4 bytes
    const b = await _randomBytes(4);

    // to int
    return b.readUInt32BE(0)
}

// generate a random integer within given range (inclusive)
async function randomIntInRange(low, high){
    // calculate normalized range
    const m = high-low+1;

    // get random uint (0 <= r <= INT_MAX)
    const r = await randomUInt32();

    // to normalized float (0.0 <= x < 1.0)
    const x = r/(0xFFFFFFFF + 1);

    // map to range
    return Math.floor(x*m) + low;
}

// get multiple random elements from character class
async function getRandomElementsByClass(cc, num){
    // get a list of random char positions
    const positions = await Promise.all((new Array(num)).fill(0).map(() => randomIntInRange(0, cc.length-1)));

    // map position to chars
    return positions.map(i => cc[i]).join('');
}

module.exports = {
    getRandomElementsByClass: getRandomElementsByClass,
    randomIntInRange: randomIntInRange,
    randomUInt32: randomUInt32
};
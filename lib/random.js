
// generate a random integer within given range (inclusive)
function randomIntInRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

// get multiple random elements from character class
function getRandomElementsByClass(cc, num){
    let output = '';
    for (let i=0;i<num;i++){
        output += cc[randomIntInRange(0, cc.length-1)];
    }
    return output;
}

module.exports = {
    getRandomElementsByClass: getRandomElementsByClass,
    randomIntInRange: randomIntInRange
};
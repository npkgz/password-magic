const _random = require('./random');

// some well selected transform
const cc_leetspeak_transform = {
    A: ['4', '@'],
    B: ['8'],
    C: ['('],
    D: null,
    E: ['3', '€', '&'],
    F: null,
    G: ['6', '9', '&'],
    H: ['4', '#'],
    I: ['1', '!'],
    J: null,
    K: null,
    L: ['1'],
    M: null,
    N: null,
    O: ['0'],
    P: null,
    Q: null,
    R: null,
    S: ['5', '$'],
    T: ['7', '+'],
    U: null,
    V: null,
    W: null,
    X: null,
    Y: null,
    Z: ['2'],
};

function randomTransform(text, propability){
    const chars = text.split('');
    for (let i=0;i<chars.length;i++){
        // transform probability
        if (_random.randomIntInRange(0, 100) > propability*100){
            continue;
        }

        // transform rules
        const rule = cc_leetspeak_transform[chars[i].toUpperCase()];

        // transform rule available ?
        if (rule){
            chars[i] = rule[_random.randomIntInRange(0, rule.length - 1)];
        }
    }
    return chars.join('');
}

function transform(text){
    // probability 100%
    return randomTransform(text, 1.0);
}

module.exports = {
    // character class
    rules: cc_leetspeak_transform,
    transform: transform,
    randomTransform: randomTransform
}
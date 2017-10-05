const _numbers = require('./numbers');

// pincode - 4 random numbers
function pincode(){
    return _numbers(4);
}

module.exports = pincode;
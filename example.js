const _pwMagic = require('./password-magic');

// 10 pin numbers
console.log('Random Pin Numbers')
for (let i=0;i<10;i++){
    console.log('Pin', _pwMagic.pin());
}

// 10 numbers
console.log('Random Numbers')
for (let i=0;i<10;i++){
    console.log('Numbers', _pwMagic.numbers(20));
}

// 10 passwords
console.log('Random Human Passwords (Short)')
for (let i=0;i<10;i++){
    console.log('Human', _pwMagic.humanShort());
}

// 10 passwords
console.log('Random Internet Passwords (custom length, shuffled)')
for (let i=0;i<10;i++){
    console.log('Internet', _pwMagic.internet(50, true));
}
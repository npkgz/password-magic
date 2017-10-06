const _pwMagic = require('./password-magic');

// 10 pin numbers
console.log('\n- Random Pin Numbers')
for (let i=0;i<10;i++){
    console.log('Pin', _pwMagic.pin());
}

// 10 numbers
console.log('\n- Random Numbers')
for (let i=0;i<10;i++){
    console.log('Numbers', _pwMagic.numbers(20));
}

// 10 passwords
console.log('\n- Random Human Passwords (Short)')
for (let i=0;i<10;i++){
    console.log('Human', _pwMagic.humanShort());
}

// 10 passwords
console.log('\n- Random Internet Passwords (custom length, shuffled)')
for (let i=0;i<10;i++){
    console.log('Internet', _pwMagic.internet(50, true));
}

// 10 passwords
console.log('\n- Random Server Passwords')
for (let i=0;i<10;i++){
    console.log('Server', _pwMagic.server(25));
}
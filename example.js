const _pwMagic = require('./password-magic');

(async function(){
    try{
        console.time('ExecTime');

        console.log('\n- Random Pin Numbers')
        for (let i=0;i<10;i++){
            console.log('Pin', await _pwMagic.pin());
        }
        
        console.log('\n- Random Numbers')
        for (let i=0;i<10;i++){
            console.log('Numbers', await _pwMagic.numbers(20));
        }
        
        console.log('\n- Random Human Passwords (Short)')
        for (let i=0;i<10;i++){
            console.log('Human', await _pwMagic.humanShort());
        }
        
        console.log('\n- Random Internet Passwords (custom length, shuffled)')
        for (let i=0;i<10;i++){
            console.log('Internet', await _pwMagic.internet(50, true));
        }
        
        console.log('\n- Random Server Passwords')
        for (let i=0;i<10;i++){
            console.log('Server', await _pwMagic.server(25));
        }
        
        console.log('\n- Alpha-Numerical Tokens')
        for (let i=0;i<10;i++){
            console.log('Token', await _pwMagic.token(64));
        }

        console.timeEnd('ExecTime');
    }catch(e){
        console.error(e);
    }
})();

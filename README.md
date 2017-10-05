[![Build Status](https://travis-ci.org/AndiDittrich/Node.password-magic.svg?branch=master)](https://travis-ci.org/AndiDittrich/Node.password-magic)

password-magic
=========================

Generate ultrastrong user passwords and auth tokens

```
yarn add password-magic --save
```

Features
------------------------------

* Generate Random User Passwords
* Random Number Sequences of arbitrary length 
* Random Pin Numbers (4 Digits)
* Remarkable Human Passwords

API
------------------------------

 * [numbers](#numbers) - Random Number Sequences of arbitrary length 

numbers
------------------------------

**Description:** Random Number Sequences of arbitrary length 

**Syntax:** `sequence:string = numbers([length:int = 8])`

**Arguments:**

 * length:int - length of the generated sequence

**Example:**

```js
const _pwMagic = require('./password-magic');

for (let i=0;i<10;i++){
    console.log('Numbers', _pwMagic.numbers());
}
```


Any Questions ? Report a Bug ? Enhancements ?
---------------------------------------------
Please open a new issue on [GitHub](https://github.com/AndiDittrich/Node.password-magic/issues)

License
-------
password-magic is OpenSource and licensed under the Terms of [The MIT License](LICENSE.md)

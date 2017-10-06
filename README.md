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
* Remarkable Human Passwords (nato+greek alphabet)
* Human passwords/tokens only uses easy readable chars (`l` and `i` are avoided)

API
------------------------------

 * [numbers](#numbers) - Random Number Sequences of arbitrary length 
 * [pin](#pin) - Creates a 4 digit numerical code
 * [internet](#internet) - Strong passphrases especially used for web services/accounts

numbers
------------------------------

**Description:** Random Number Sequences of arbitrary length 

**Syntax:** `sequence:string = numbers([length:int = 8])`

**Output:** `9071248216498`

**Arguments:**

 * length:int - length of the generated sequence

**Example:**

```js
const _pwMagic = require('./password-magic');

for (let i=0;i<10;i++){
    console.log('Numbers', _pwMagic.numbers());
}
```

pin
------------------------------

**Description:** Creates a 4 digit numerical code

**Syntax:** `sequence:string = pin()`

**Output:** `0981`

internet
------------------------------

**Description:** Strong passphrases especially used for web services/accounts

**Syntax:** `sequence:string = internet([length:int = 22], [shuffle:boolean = false])`

**Output:** `brGK98]~hkhyNE79_?297`

**Arguments:**

 * length:int - length of the generated sequence
 * shuffle:boolean - flag to enable character position shuffle (random positions)

**Example:**

```js
const pw1 = _pwMagic.internet();
// brGK98]~hkhyNE79_?297

const pw2 = _pwMagic.internet(50, true);
// 62p6u4dS934HssJ9*8BMa!(NN}q}384Udoc2F!)8%§5!D7psYL
```

Any Questions ? Report a Bug ? Enhancements ?
---------------------------------------------
Please open a new issue on [GitHub](https://github.com/AndiDittrich/Node.password-magic/issues)

License
-------
password-magic is OpenSource and licensed under the Terms of [The MIT License](LICENSE.md)

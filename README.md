[![Build Status](https://travis-ci.org/AndiDittrich/Node.password-magic.svg?branch=master)](https://travis-ci.org/AndiDittrich/Node.password-magic)

password-magic
=========================

Generate ultrastrong user passwords and auth tokens

```
yarn add password-magic --save
```

Features
------------------------------

* Full **asynchronous operation**
* Generate Random User Passwords
* Random Number Sequences of arbitrary length 
* Random Pin Numbers (4 Digits)
* Remarkable Human Passwords (nato+greek alphabet)
* Human passwords/tokens only uses easy readable chars (`l` and `i` are avoided)
* Alphnumerical Tokens
* Node.js [crypto API](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) is used to generate uniformly-distributed random numbers

API
------------------------------

 * [numbers](#numbers) - Random Number Sequences of arbitrary length 
 * [pin](#pin) - Creates a 4 digit numerical code
 * [internet](#internet) - Strong passphrases especially used for web services/accounts/wifi
 * [server](#server) - Ultrastrong passphrases especially used for servers
 * [humanShort](#humanshort) - Remarkable passwords including greek+nato alphabet
 * [token](#token) - Alphnumerical Standard Tokens

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
    console.log('Numbers', await _pwMagic.numbers());
}
```

pin
------------------------------

**Description:** Creates a 4 digit numerical code

**Syntax:** `sequence:string = pin()`

**Output:** `0981`

internet
------------------------------

**Description:** Strong passphrases especially used for web services/accounts or wifi

**Syntax:** `sequence:string = internet([length:int = 22], [shuffle:boolean = false])`

**Output:** `brGK98]~hkhyNE79_?297`

**Arguments:**

 * length:int - length of the generated sequence
 * shuffle:boolean - flag to enable character position shuffle (random positions)

**Example:**

```js
const pw1 = await _pwMagic.internet();
// brGK98]~hkhyNE79_?297

const pw2 = await _pwMagic.internet(50, true);
// 62p6u4dS934HssJ9*8BMa!(NN}q}384Udoc2F!)8%§5!D7psYL
```

server
------------------------------

**Description:** Ultrastrong passphrases especially used for servers

**Syntax:** `sequence:string = server([length:int = 20])`

**Output:** `v~8)yyk§HMKU§HBg&%#w`

**Arguments:**

 * length:int - length of the generated sequence

**Example:**

```js
const pw1 = await _pwMagic.server(25);
// v~8)yyk§HMKU§HBg&%#wyDS9F
```

humanShort
------------------------------

**Description:** Remarkable passphrases especially used for web services/accounts **with** multifactor auth

**Syntax:** `sequence:string = humanShort()`

**Output:** `foxtrot5SIERRA,four]03pm`

**Example:**

```js
const pw1 = await _pwMagic.humanShort();
// foxtrot5SIERRA,four]03pm
```

token
------------------------------

**Description:** Alphnumerical Standard Tokens

**Syntax:** `sequence:string = token([length:int = 20])`

**Output:** `l4J4rK9v62MUGBstbgh0XyQUQ`

**Arguments:**

 * length:int - length of the generated sequence

**Example:**

```js
const pw1 = await _pwMagic.token(50);
// Q49hIVylOKI1ixUe5FLliIsUEbASHWXjFRBEBPs6zcoog0JFnezOvS6HJWahQhca
```

Any Questions ? Report a Bug ? Enhancements ?
---------------------------------------------
Please open a new issue on [GitHub](https://github.com/AndiDittrich/Node.password-magic/issues)

License
-------
password-magic is OpenSource and licensed under the Terms of [The MIT License](LICENSE.md)

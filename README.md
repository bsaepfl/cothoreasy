# cothoreasy
The fastest way to connect to the cothority network

This package helps you connect to the cothority conodes, by connecting to a [zinc](https://github.com/bsaepfl/zinc) instance.

## How to use ?

First, install the dependency (it's [ultra light](https://bundlephobia.com/result?p=cothoreasy) :sparkles:):
```
yarn add cothoreasy
```

Then, import it to your project:
```javascript
import Cothoreasy from 'cothoreasy'

// or using CommonJS modules
const Cothoreasy = require('cothoreasy')
```

Instantiate the class, and then use it !
```javascript
const coth = new Cothoreasy()


// use it with async/await
await coth.init()
console.log(await coth.status())

// use it with .then()
coth.init().then(() => {
  coth.status().then(console.log)
})
```

## Options

You can pass in options when instantiating:
```javascript
const coth = new Cothoreasy({ url: 'https://my_zinc_instance.com/' })
```

### `url`

By default, cothoreasy connects to the BSA zinc instance. You can pass in the url for your own instance.

## Change Cothority

If you want to change the cothority, just check out which ones are available in `coth.cothorities` and run `coth.changeCothority(yourCothority)` (this will return a promise).
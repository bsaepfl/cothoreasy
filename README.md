# cothoreasy
The fastest way to connect to the cothority network

This package helps you connect to the cothority conodes, by connecting to a [zinc](https://github.com/bsaepfl/zinc) instance.

## How to use ?

First, install the dependency:
```
yarn add cothoreasy
```

Then, import it to your project (also works using CommonJS modules with node):
```
import Cothoreasy from 'cothoreasy'
```

Instantiate the class, and then use it !
```
const coth = new Cothoreasy()

console.log(await coth.status())
-- or with .then() --
coth.status().then(console.log)
```

## Options

You can pass options when instantiating:
```
const coth = new Cothoreasy({ url: 'https://my_zinc_instance.com/' })
```

### `url`

By default, cothoreasy connects to the BSA zinc instance. You can pass in the url for your own instance.
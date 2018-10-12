const fetch = require('isomorphic-unfetch')

const DEFAULT_URL = 'https://zinc.louismerl.in/'

class Cothoreasy {
  constructor (args) {
    const { url } = args || {}
    if (url && (!url.startsWith('http') || !url.endsWith('/'))) {
      throw new Error('Malformed URL')
    }
    this.url = url || DEFAULT_URL
  }

  async status () {
    const res = await fetch(`${this.url}status`)
    const text = await res.text()
    return JSON.parse(text)
  }
}

module.exports = Cothoreasy

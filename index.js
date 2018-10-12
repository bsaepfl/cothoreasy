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

  static async get (query) {
    const res = await fetch(query)
    const text = await res.text()
    return JSON.parse(text)
  }

  async status () {
    return Cothoreasy.get(`${this.url}status`)
  }

  async skipchain () {
    return Cothoreasy.get(`${this.url}skipchain`)
  }

  async skipchains () {
    return Cothoreasy.get(`${this.url}skipchains`)
  }
}

module.exports = Cothoreasy

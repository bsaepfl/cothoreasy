const fetch = require('isomorphic-unfetch')

const DEFAULT_URL = 'https://zinc.cool/'

class Cothoreasy {
  constructor (args) {
    const { url } = args || {}
    if (url && (!url.startsWith('http') || !url.endsWith('/'))) {
      throw new Error('Malformed URL')
    }
    this.url = url || DEFAULT_URL
  }

  async init () {
    const cothorities = await Cothoreasy.get(`${this.url}cothorities`)
    if (!cothorities) throw new Error('Could not get the list of cothorities')
    this.cothorities = cothorities
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

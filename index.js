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
    const cothorities = await this.get('cothorities')
    if (!cothorities) throw new Error('Could not get the list of cothorities')
    this.cothorities = cothorities
    this.cothority = cothorities[0]
  }

  parameters () {
    return this.cothority ? `?cothority=${this.cothority}` : ''
  }

  async changeCothority (cothority) {
    if (this.cothorities.includes(cothority)) {
      this.cothority = cothority
    } else {
      throw new Error('Could not change cothority, it does not exist')
    }
  }

  async get (query) {
    const res = await fetch(this.url + query + this.parameters())
    const text = await res.text()
    return JSON.parse(text)
  }

  async status () {
    return this.get('status')
  }

  async skipchain () {
    return this.get('skipchain')
  }

  async skipchains () {
    return this.get('skipchains')
  }
}

module.exports = Cothoreasy

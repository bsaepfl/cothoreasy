/* eslint-env jest */
const Cothoreasy = require('./index')

const cauth = new Cothoreasy()

beforeAll(() => {
  return cauth.init()
})

test('url field is instanciated', () => {
  expect(cauth.url).toBeDefined()
})

test('cothorities field is an array', () => {
  expect(Array.isArray(cauth.cothorities)).toBeTruthy()
})

describe('status method', () => {
  let status
  beforeEach(async () => {
    status = await cauth.status()
  })
  test('returns an object', () => {
    expect(typeof status).toBe('object')
  })
  test('has a status field', () => {
    expect(status.status).toBeDefined()
  })
  test('has a serveridentity field', () => {
    expect(status.serveridentity).toBeDefined()
  })
})

describe('skipchain method', () => {
  let skipchain
  beforeEach(async () => {
    skipchain = await cauth.skipchain()
  })
  test('returns an object', () => {
    expect(typeof skipchain).toBe('object')
  })
  test('has an update array field', () => {
    expect(Array.isArray(skipchain.update)).toBeTruthy()
  })
})

describe('skipchains method', () => {
  let skipchains
  beforeEach(async () => {
    skipchains = await cauth.skipchains()
  })
  test('returns an object', () => {
    expect(typeof skipchains).toBe('object')
  })
})

describe('changeing cothority', () => {
  let cauth = new Cothoreasy()

  beforeAll(() => {
    return cauth.init()
  })

  test('changes the conode status', async () => {
    await cauth.changeCothority(cauth.cothorities[0])
    const status1 = await cauth.status()
    await cauth.changeCothority(cauth.cothorities[1])
    const status2 = await cauth.status()
    expect(status1).not.toEqual(status2)
  })
})

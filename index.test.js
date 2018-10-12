/* eslint-env jest */
const Cothoreasy = require('./index')

const cauth = new Cothoreasy()

test('url was instanciated', () => {
  expect(cauth.url).toBeDefined()
})

describe('status()', () => {
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

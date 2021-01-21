const supertest = require('supertest')
const app = require('../../src/app')

describe('Health check', () => {
  test('Should return status 200', async () => {
    const response = await supertest(app).get('/health_check')
    const { status } = response

    expect(status).toBe(200)
  })
})

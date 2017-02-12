import { UPDATE_BUS_TIMES, getBusTimes } from '../actions'
import nock from 'nock'

describe('Bus Times Actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  describe('getBusTimes', () => {
    it('should request times from /bus-times/schedule', (done) => {
      const scope = nock('http://mirror.benp.space')
                      .get('/bus-times/schedule')
                      .reply(200, [])
      getBusTimes()((action) => {
        expect(action).toEqual({ type: UPDATE_BUS_TIMES, schedule: [] })
        scope.done()
        done()
      })
    })

    it('should throw an error if the API call fails')
  })
})

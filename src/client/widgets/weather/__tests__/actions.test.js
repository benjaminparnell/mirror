import { getWeather, UPDATE_WEATHER } from '../actions'
import nock from 'nock'

describe('Weather Actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  describe('getWeather', () => {
    it('should request weather from /weather', (done) => {
      const scope = nock('http://mirror.benp.space')
                      .get('/weather')
                      .reply(200, { weather: {} })
      getWeather()((action) => {
        expect(action).toEqual({ type: UPDATE_WEATHER, weather: {} })
        scope.done()
        done()
      })
    })

    it('should throw an error if the API call fails')
  })
})

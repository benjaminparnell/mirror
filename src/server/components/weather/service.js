const request = require('superagent')

class WeatherService {
  constructor (apiKey) {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
    this.apiKey = apiKey
  }

  getWeatherByCityId (cityId, cb) {
    this.makeRequest('', { id: cityId }, cb)
  }

  getWeatherByCityName (cityName, cb) {
    this.makeRequest('', { q: cityName }, cb)
  }

  makeRequest (path, query, cb) {
    const reqUrl = this.baseUrl + path

    query = Object.assign(
      {},
      query,
      { appid: this.apiKey,
        units: 'metric'
      }
    )

    request
      .get(reqUrl)
      .query(query)
      .end(cb)
  }
}

module.exports = WeatherService

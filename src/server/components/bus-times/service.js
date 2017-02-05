const request = require('superagent')

class BusService {
  constructor (namedStops) {
    this.baseUrl = 'https://api.nctx.co.uk/api/v1'
    this.namedStops = namedStops
  }

  getTimesForStop (stopCode, cb) {
    this.makeRequest('/departures/' + stopCode + '/realtime', (err, res) => {
      if (err) return cb(err)
      const schedule = res.body
      cb(null, schedule)
    })
  }

  makeRequest (url, cb) {
    const reqUrl = this.baseUrl + url

    request
      .get(reqUrl)
      .end(cb)
  }
}

module.exports = BusService

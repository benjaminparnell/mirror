module.exports = createController

const WeatherService = require('../service')

function createController (app) {
  const weatherService = new WeatherService(process.env.OPEN_WEATHER_MAP_API_KEY)

  app.get('/weather', (req, res, next) => {
    weatherService.getWeatherByCityId('2641170', (err, json) => {
      if (err) return next(err)
      res.status(200).json(json.body)
    })
  })
}

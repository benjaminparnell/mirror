module.exports = createController

const BusService = require('../service')

function createController (app) {
  const busService = new BusService({ home: 'ntmapmjw', parentsHouse: '3300RU0245' })

  app.get('/bus-times/schedule', (req, res, next) => {
    const stopCode = busService.namedStops.parentsHouse
    busService.getTimesForStop(stopCode, (err, schedule) => {
      if (err) return next(err)
      res.status(200).json(schedule)
    })
  })
}

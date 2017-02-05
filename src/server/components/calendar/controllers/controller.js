module.exports = createController

function createController (app) {
  app.get('/calendar', (req, res, next) => {
    res.status(200).json([])
  })
}

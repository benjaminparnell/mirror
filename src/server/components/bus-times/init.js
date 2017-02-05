module.exports = init

const createController = require('./controllers/controller')

function init (app) {
  console.log('adding bus-times component')
  createController(app)
}

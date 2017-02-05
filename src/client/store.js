import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export default function configureStore (preLoadedState) {
  const middlewares = [ thunk ]

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger')
    const logger = createLogger()
    middlewares.push(logger)
  }

  const store = createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(...middlewares)
  )

  return store
}

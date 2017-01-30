import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducer'

export default function configureStore (preLoadedState) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, createLogger())
  )

  return store
}

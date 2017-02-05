import { combineReducers } from 'redux'
import clock from './widgets/clock/reducer'
import busTimes from './widgets/bus-times/reducer'

const rootReducer = combineReducers({
  clock,
  busTimes
})

export default rootReducer

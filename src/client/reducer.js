import { combineReducers } from 'redux'
import clock from './widgets/clock/reducer'
import busTimes from './widgets/bus-times/reducer'
import weather from './widgets/weather/reducer'

const rootReducer = combineReducers({
  clock,
  busTimes,
  weather
})

export default rootReducer

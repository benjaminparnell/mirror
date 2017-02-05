import { UPDATE_WEATHER } from './actions'

const initialState = {
  weather: [ {} ]
}

export default function weather (state = initialState, action) {
  switch (action.type) {
    case UPDATE_WEATHER:
      return Object.assign({}, state, { weather: action.weather })
    default:
      return state
  }
}

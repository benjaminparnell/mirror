import { UPDATE_BUS_TIMES } from './actions'

const initialState = {
  schedule: []
}

export default function busTimes (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BUS_TIMES:
      return Object.assign({}, state, { schedule: action.schedule })
    default:
      return state
  }
}

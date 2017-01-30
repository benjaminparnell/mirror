import dateFormat from 'date-fns/format'

import { UPDATE_TIME } from './actions'

const initialState = {
  time: dateFormat(new Date(), 'HH:mm:ss')
}

export default function clock (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return Object.assign({}, state, { time: dateFormat(new Date(), 'HH:mm:ss') })
    default:
      return state
  }
}

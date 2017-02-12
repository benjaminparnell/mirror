import reducer from '../reducer'
import { UPDATE_BUS_TIMES } from '../actions'

describe('Bus Times Reducer', () => {
  it('should return the state when passed an action it doesn\'t want', () => {
    const expectedState = { schedule: [] }
    expect(reducer(undefined, { type: '' })).toEqual(expectedState)
  })

  it('should update state.schedule if the action is UPDATE_BUS_TIMES', () => {
    const expectedState = { schedule: [ {} ] }
    const action = { type: UPDATE_BUS_TIMES, schedule: [ {} ] }
    expect(reducer(undefined, action)).toEqual(expectedState)
  })
})

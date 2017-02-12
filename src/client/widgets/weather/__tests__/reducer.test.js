import reducer from '../reducer'
import { UPDATE_WEATHER } from '../actions'

describe('Weather Reducer', () => {
  it('should return the state when the action is not a type it wants', () => {
    const expectedState = { weather: {} }
    expect(reducer(expectedState, { type: '' })).toEqual(expectedState)
  })

  it('should update state.weather if the action is UPDATE_WEATHER', () => {
    const state = null
    const weather = { temp: 0 }
    const action = { type: UPDATE_WEATHER, weather }
    expect(reducer(state, action)).toEqual({ weather })
  })
})

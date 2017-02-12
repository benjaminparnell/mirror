import reducer from '../reducer'
import { UPDATE_TIME } from '../actions'
import MockDate from 'mockdate'

describe('Clock Reducer', () => {
  afterEach(() => {
    MockDate.reset()
  })

  it('should return the state when the action is not a type it wants', () => {
    const expectedState = { time: '' }
    expect(reducer(expectedState, { type: '' })).toEqual(expectedState)
  })

  it('should update state.time if the action is UPDATE_TIME', () => {
    MockDate.set(new Date(2017, 1, 1))
    const state = null
    const action = { type: UPDATE_TIME }
    expect(reducer(state, action)).toEqual({ time: '00:00:00' })
  })
})

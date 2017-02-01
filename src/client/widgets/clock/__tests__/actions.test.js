import { UPDATE_TIME, updateTime } from '../actions'

describe('Clock Actions', () => {
  it('should create an action to update the time', () => {
    const expectedAction = {
      type: UPDATE_TIME
    }
    expect(updateTime()).toEqual(expectedAction)
  })
})

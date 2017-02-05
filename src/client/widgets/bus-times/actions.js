export const UPDATE_BUS_TIMES = 'UPDATE_BUS_TIMES'

const request = require('superagent')

export function getBusTimes () {
  return (dispatch) => {
    request
      .get('/bus-times/schedule')
      .end((err, res) => {
        if (err) throw err
        dispatch(updateBusTimes(res.body))
      })
  }
}

export function updateBusTimes (schedule) {
  return {
    type: UPDATE_BUS_TIMES,
    schedule: schedule
  }
}

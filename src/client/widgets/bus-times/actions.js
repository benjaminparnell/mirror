export const UPDATE_BUS_TIMES = 'UPDATE_BUS_TIMES'

import request from 'superagent'

export function getBusTimes () {
  return (dispatch) => {
    request
      .get('http://mirror.benp.space/bus-times/schedule')
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

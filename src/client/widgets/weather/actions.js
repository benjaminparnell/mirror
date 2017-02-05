export const UPDATE_WEATHER = 'UPDATE_WEATHER'

import request from 'superagent'

export function getWeather () {
  return (dispatch) => {
    request
      .get('/weather')
      .end((err, res) => {
        if (err) throw err
        dispatch(updateWeather(res.body.weather))
      })
  }
}

export function updateWeather (weather) {
  return {
    type: UPDATE_WEATHER,
    weather: weather
  }
}

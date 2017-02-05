import React from 'react'
import { Provider } from 'react-redux'
import Clock from '../widgets/clock/clock'
import BusTimes from '../widgets/bus-times/bus-times'
import Weather from '../widgets/weather/weather'

export default ({ store }) => {
  return (
    <Provider store={store}>
      <div className='mirror'>
        <Clock />
        <BusTimes />
        <Weather />
      </div>
    </Provider>
  )
}

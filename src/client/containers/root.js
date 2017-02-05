import React from 'react'
import { Provider } from 'react-redux'
import Clock from '../widgets/clock/clock'
import BusTimes from '../widgets/bus-times/bus-times'

export default ({ store }) => {
  return (
    <Provider store={store}>
      <div className='mirror'>
        <Clock />
        <BusTimes />
      </div>
    </Provider>
  )
}

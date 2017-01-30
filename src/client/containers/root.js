import React from 'react'
import { Provider } from 'react-redux'
import Clock from '../widgets/clock/clock'

export default ({ store }) => {
  return (
    <Provider store={store}>
      <Clock />
    </Provider>
  )
}

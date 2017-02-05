import React from 'react'
import { connect } from 'react-redux'
import { getWeather } from './actions'
import timekeeper from '../../lib/timekeeper'

class Weather extends React.Component {
  componentDidMount () {
    this.props.getWeather()
  }

  render () {
    const { weather } = this.props

    return (
      <div className='widget'>
        <h1>{weather[0].main}</h1>
        <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.weather }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => {
      timekeeper.every('1 minute', () => {
        dispatch(getWeather())
      })
      dispatch(getWeather())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)

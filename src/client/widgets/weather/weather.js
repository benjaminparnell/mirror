import React from 'react'
import { connect } from 'react-redux'
import { getWeather } from './actions'

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
  return {
    weather: state.weather.weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => {
      dispatch(getWeather())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)

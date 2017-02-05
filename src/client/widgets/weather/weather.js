import React from 'react'
import { connect } from 'react-redux'
import { getWeather } from './actions'
import { ONE_MINUTE } from '../../constants'

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
      setInterval(() => {
        dispatch(getWeather())
      }, ONE_MINUTE)
      dispatch(getWeather())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)

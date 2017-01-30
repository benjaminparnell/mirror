import React from 'react'
import { connect } from 'react-redux'
import { updateTime } from './actions'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 4.5em;
  text-align: center;
`

class Clock extends React.Component {
  componentDidMount () {
    this.props.startClock()
  }

  render () {
    const { time } = this.props
    return (
      <Title>{time}</Title>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.clock.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: () => {
      setInterval(() => {
        dispatch(updateTime())
      }, 1000)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

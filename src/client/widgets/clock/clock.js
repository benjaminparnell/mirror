import React from 'react'
import { connect } from 'react-redux'
import { updateTime } from './actions'
import styled from 'styled-components'
import timekeeper from '../../lib/timekeeper'

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
  return { ...state.clock }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: () => {
      timekeeper.every('1 second', () => {
        dispatch(updateTime())
      })
      dispatch(updateTime())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

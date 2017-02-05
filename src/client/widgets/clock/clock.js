import React from 'react'
import { connect } from 'react-redux'
import { updateTime } from './actions'
import { ONE_SECOND } from '../../constants'
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
  return { ...state.clock }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: () => {
      setInterval(() => {
        dispatch(updateTime())
      }, ONE_SECOND)
      dispatch(updateTime())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

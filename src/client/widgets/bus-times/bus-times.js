import React from 'react'
import { connect } from 'react-redux'
import { getBusTimes } from './actions'
import differenceInMinutes from 'date-fns/difference_in_minutes'
import timekeeper from '../../lib/timekeeper'

class BusTimes extends React.Component {
  componentDidMount () {
    this.props.getBusTimes()
  }

  render () {
    const { schedule } = this.props

    return (
      <div className='widget'>
        {(() => {
          return schedule.map((item, index) => {
            return (
              <div className='schedule-item' key={index}>
                <h1>Number {item.busService} in {differenceInMinutes(new Date(item.time), new Date())} minutes</h1>
              </div>
            )
          })
        })()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.busTimes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBusTimes: () => {
      timekeeper.every('1 minute', () => {
        dispatch(getBusTimes())
      })
      dispatch(getBusTimes())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusTimes)

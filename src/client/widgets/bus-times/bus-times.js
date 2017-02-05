import React from 'react'
import { connect } from 'react-redux'
import { getBusTimes } from './actions'
import differenceInMinutes from 'date-fns/difference_in_minutes'

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
  return {
    schedule: state.busTimes.schedule
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBusTimes: () => {
      dispatch(getBusTimes())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusTimes)

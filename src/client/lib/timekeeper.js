import ms from 'ms'

export default {
  every (duration, fn) {
    const milliseconds = ms(duration)
    return setInterval(fn, milliseconds)
  },

  stop (interval) {
    clearInterval(interval)
  }
}

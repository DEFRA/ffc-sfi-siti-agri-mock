const { delayInSeconds } = require('../config')

const delay = async (seconds) => {
  if (!seconds) {
    seconds = delayInSeconds
  }
  seconds = seconds * 1000
  return new Promise((resolve) => {
    setTimeout(resolve, seconds)
  })
}

module.exports = delay

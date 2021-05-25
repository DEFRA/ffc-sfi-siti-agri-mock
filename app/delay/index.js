const { delayInSeconds } = require('../config')

const delay = async (seconds) => {
  if (!seconds) {
    seconds = delayInSeconds
  }
  return new Promise((resolve) => {
    setTimeout(resolve, seconds)
  })
}

module.exports = delay

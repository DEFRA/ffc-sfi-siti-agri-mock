const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/check-eligibility',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Eligibility check completed')
      return h.response({
        sbi: request.payload?.sbi,
        isEligible: true
      })
    }
  }
}]

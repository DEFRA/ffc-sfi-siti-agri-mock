const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/calculate',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Agreement calculated', request.payload)
      request.payload.paymentAmount = 616800
      return h.response(request.payload)
    }
  }
}]

const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/calculate',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Agreement calculated')
      return h.response({
        sbi: request.payload?.sbi,
        paymentAmount: 616800
      })
    }
  }
}]

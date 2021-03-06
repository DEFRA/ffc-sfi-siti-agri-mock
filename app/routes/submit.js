const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/submit',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Agreement submitted')
      return h.response({
        sbi: request.payload?.sbi,
        agreementId: request.payload?.agreementId,
        submitted: true
      })
    }
  }
}]

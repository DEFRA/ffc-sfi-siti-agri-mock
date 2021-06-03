const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/withdraw',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Agreement withdrawn')
      return h.response({
        sbi: request.payload?.sbi,
        agreementId: request.payload?.agreementId,
        withdrawn: true
      })
    }
  }
}]

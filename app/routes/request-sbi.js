const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/request-sbi',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Got SBIs from CRN', request.payload)
      return h.response({
        sbis: ['106336339', '106651310']
      })
    }
  }
}]

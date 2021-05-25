const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/validate',
  options: {
    handler: async (request, h) => {
      await delay()
      return h.response({
        sbi: request.payload?.sbi,
        isValid: true
      })
    }
  }
}]

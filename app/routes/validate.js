const delay = require('../delay')

module.exports = [{
  method: 'POST',
  path: '/validate',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Agreement validated')
      return h.response({
        sbi: request.payload?.sbi,
        isValid: true
      })
    }
  }
}]

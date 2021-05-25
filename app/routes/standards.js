const delay = require('../delay')
const standards = require('../standards')

module.exports = [{
  method: 'GET',
  path: '/standards',
  options: {
    handler: async (request, h) => {
      await delay()
      return h.response({
        sbi: request.query?.sbi,
        standards
      })
    }
  }
}]

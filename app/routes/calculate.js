const delay = require('../delay')
const buildResponse = require('../calculation')

module.exports = [{
  method: 'POST',
  path: '/calculate',
  options: {
    handler: async (request, h) => {
      await delay()
      console.info('Agreement calculated', request.payload)
      const calculationPayload = buildResponse(request.payload)
      calculationPayload.correlationId = ''
      console.log(JSON.stringify(calculationPayload))

      return h.response({
        sbi: request.payload?.sbi,
        paymentAmount: 616800
      })
    }
  }
}]

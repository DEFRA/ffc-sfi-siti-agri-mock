const buildResponse = (calculationPayload) => {
  calculate(calculationPayload, 'soilProtection')
  calculate(calculationPayload, 'permanentGrasslandProtection')
  calculate(calculationPayload, 'moorlandGrazing')
  calculate(calculationPayload, 'livestockWelfare')
  return calculationPayload
}

const calculate = (calculationPayload, standardType) => {
  const standard = calculationPayload.calculation.standards[standardType].actions
  for (const [key, value] of Object.entries(standard)) {
    standard[key] = value.map(action => {
      action.expression = 'x*y'
      action.value = 616800
      return action
    })
  }
}

module.exports = buildResponse

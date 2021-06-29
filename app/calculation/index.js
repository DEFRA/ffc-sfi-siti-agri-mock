const buildResponse = (calculationPayload) => {
  const rate = 6
  calculate(calculationPayload, 'soilProtection', rate)
  calculate(calculationPayload, 'permanentGrasslandProtection', rate)
  calculate(calculationPayload, 'moorlandGrazing', rate)
  calculate(calculationPayload, 'livestockWelfare', rate)
  return calculationPayload
}

const calculate = (calculationPayload, standardType, amount) => {
  const standard = calculationPayload.calculation.standards[standardType].actions
  for (const [key, value] of Object.entries(standard)) {
    standard[key] = value.map(action => {
      action.expression = `AREA*${amount}`
      action.value = action.area * amount
      return action
    })
  }
}

module.exports = buildResponse

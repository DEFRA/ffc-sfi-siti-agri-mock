const buildResponse = (calculationPayload) => {
  const soilStandards = calculationPayload.calculation.standards.soilProtection.actions
  calculate(soilStandards)

  const permanentGrasslandStandards = calculationPayload.calculation.standards.permanentGrasslandProtection.actions
  calculate(permanentGrasslandStandards)

  const moorlandGrazingStandards = calculationPayload.calculation.standards.moorlandGrazing.actions
  calculate(moorlandGrazingStandards)

  const livestockWelfareStandards = calculationPayload.calculation.standards.livestockWelfare.actions
  calculate(livestockWelfareStandards)

  return calculationPayload
}

const calculate = (standard) => {
  for (const [key, value] of Object.entries(standard)) {
    standard[key] = value.map(action => {
      action.expression = 'x*y'
      action.value = 616800
      return action
    })
  }
}

module.exports = buildResponse

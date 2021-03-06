const joi = require('joi')
const envs = ['development', 'test', 'production']

// Define config schema
const schema = joi.object().keys({
  port: joi.number().default(3002),
  env: joi.string().valid(...envs).default(envs[0]),
  delayInSeconds: joi.number().integer().default(0)
})

// Build config
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  delayInSeconds: process.env.DELAY_IN_SECONDS
}

// Validate config
const result = schema.validate(config, {
  abortEarly: false
})

if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}

const value = result.value

// Add some helper props
value.isDev = value.env === 'development'
value.isProd = value.env === 'production'

module.exports = value

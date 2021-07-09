const routes = [].concat(
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/eligibility'),
  require('../routes/standards'),
  require('../routes/validate'),
  require('../routes/calculate'),
  require('../routes/submit'),
  require('../routes/withdraw'),
  require('../routes/request-sbi')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server) => {
      server.route(routes)
    }
  }
}

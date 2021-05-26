const routes = [].concat(
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/eligibility'),
  require('../routes/standards'),
  require('../routes/validate'),
  require('../routes/calculate'),
  require('../routes/submit')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server) => {
      server.route(routes)
    }
  }
}

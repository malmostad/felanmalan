const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/photos', createProxyMiddleware({ target: process.env.REACT_APP_RAILS_URL }))
  app.use('/reports', createProxyMiddleware({ target: process.env.REACT_APP_RAILS_URL }))
}

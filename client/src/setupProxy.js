const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/photos",
    createProxyMiddleware({ target: "http://localhost:3001/" })
  );
  app.use(
    "reports",
    createProxyMiddleware({ target: "http://localhost:3001/" })
  );
};

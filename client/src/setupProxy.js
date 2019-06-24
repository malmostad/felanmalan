const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/photos", { target: "http://localhost:3001/" }));
  app.use(proxy("/reports", { target: "http://localhost:3001/" }));
};

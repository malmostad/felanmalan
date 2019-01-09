const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/sign-in", { target: "http://localhost:3001/" }));
  app.use(proxy("/sign-up", { target: "http://localhost:3001/" }));
  app.use(proxy("/sign-out", { target: "http://localhost:3001/" }));
};

// Move out to .env for easier build of other branded apps?
const AppConfig = require("./app.config.js");

module.exports = {
  secondaryGrey: "#8A8A8D",
  black: "#12181F",
  contentMaxWidth: "640px",
  trackPageBg: "#08215B",
  trackPageText: "#4CA9F8",
  divider: "#C8C7CC",
  ...AppConfig
};

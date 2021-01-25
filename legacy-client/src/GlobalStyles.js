// Move out to .env for easier build of other branded apps?
const AppConfig = require("./app.config.js");

module.exports = {
  secondaryGrey: "#8A8A8D",
  thirdGray: "#C4C4C4",
  black: "#12181F",
  contentMaxWidth: "560px",
  trackPageBg: "#08215B",
  trackPageText: "#4CA9F8",
  divider: "#C8C7CC",
  bottomBarHeight: "70px",
  ...AppConfig
};

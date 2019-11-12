import ReactGA from "react-ga";

const { REACT_APP_GA_CODE = false } = process.env;
if (REACT_APP_GA_CODE) {
  ReactGA.initialize(REACT_APP_GA_CODE, {
    debug: process.env.NODE_ENV === "development"
  });
}

export const pageView = page => {
  if (REACT_APP_GA_CODE) {
    ReactGA.pageview(page);
  }
};
export const track = (action, category = "interaction") => {
  if (REACT_APP_GA_CODE) {
    ReactGA.event({ action, category });
  }
};
export default {
  track,
  pageView
};

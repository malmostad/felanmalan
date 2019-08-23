// import mixpanel from "mixpanel-browser";
// mixpanel.init("8493f8eab47b1c950f98a2d38a44ef85");
// user GA for now, switch to whats best matchk
//
import ReactGA from "react-ga";
const { REACT_APP_GA_CODE = false } = process.env;
if (REACT_APP_GA_CODE) {
  ReactGA.initialize(REACT_APP_GA_CODE, {
    debug: process.env.NODE_ENV === "development"
  });
}

/* Mixpanel things that may be used later on */
/*
// const env_check = process.env.NODE_ENV === "development";
const actions = {
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    }
  }
};
*/
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
}

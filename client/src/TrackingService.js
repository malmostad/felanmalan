import mixpanel from "mixpanel-browser";
mixpanel.init("8493f8eab47b1c950f98a2d38a44ef85");

const env_check = process.env.NODE_ENV === "development";

const actions = {
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    }
  }
};

export default actions;

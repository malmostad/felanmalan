import { Component } from "react";
import TrackingService from "TrackingService";
import { withRouter } from "react-router";

class TrackRouteChanges extends Component {
  componentDidMount() {
    const { history = {}, location = {} } = this.props;
    TrackingService.pageView(location.pathname);
    history.listen(location => {
      TrackingService.pageView(location.pathname);
    });
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(TrackRouteChanges);

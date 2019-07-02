import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "redux/actions";
import styles from "./Done.module.css";
import ScreenTitle from "Components/ScreenTitle";
import PhotoItem from "Components/PhotoItem";

const MAX_IMAGE_WIDTH_PERCENT = 90;
class Done extends Component {
  state = {
    description: "",
    address: "",
    previews: []
  };
  componentDidMount() {
    const { report, clear } = this.props;
    this.setState({
      ...report
    });
    clear();
  }
  renderImages = () => {
    const { previews = [] } = this.state;
    if (previews.length === 0) {
      return null;
    }
    const imageWidth = MAX_IMAGE_WIDTH_PERCENT / previews.length;
    return (
      <div className={styles.imageHolder}>
        {previews.map(preview => (
          <PhotoItem
            style={{ width: `${imageWidth}%` }}
            key={preview.uuid}
            preventRemove={true}
            previewDataURL={preview.previewDataURL}
            uuid={preview.uuid}
          />
        ))}
      </div>
    );
  };
  render() {
    const { description = "" , address = "" } = this.state;
    return (
      <div>
        <ScreenTitle
          strongTextLast={true}
          titleStrong="skickats"
          title="Felanmälan har " // intentionally trailing whitespace
        >
          <p className={styles.doneDescription}>
            Din felanmälan är nu skickad och vi kommer att se över din rapport så snart som möjligt. Om du uppgav din mail i förra steget så kommer du att få ett mail men en länk till ditt ärende.
          </p>
        </ScreenTitle>
        <div className="content">
          <div className={styles.doneCard}>
            <label>Ärende #number</label>
            {this.renderImages()}
            {address && <p className={styles.address}>{address}</p>}
            <p styles={styles.description}>{description}</p>
          </div>
          <Link className={styles.button} to="/">Börja om</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {} } = state;
  return { report };
}

export default connect(
  mapStateToProps,
  { clear }
)(Done);

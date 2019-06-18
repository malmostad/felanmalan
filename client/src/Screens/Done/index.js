import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import styles from "./Done.module.css";
import ScreenTitle from "Components/ScreenTitle";
import PhotoItem from "Components/PhotoItem";

class Done extends Component {
  renderImages = () => {
    const { previews = [] } = this.props;
    if (previews.length === 0) {
      return null;
    }
    const imageWidth = 90 / previews.length;
    return (
      <div className={styles.imageHolder}>
        {previews.map(preview => (
          <PhotoItem
            style={{ width: `${imageWidth}%` }}
            key={preview.uuid}
            previewDataURL={preview.previewDataURL}
            uuid={preview.uuid}
          />
        ))}
      </div>
    );
  };
  render() {
    const { description, address } = this.props;
    return (
      <Layout>
        <ScreenTitle
          strongTextLast={true}
          titleStrong="skickats"
          title="Felanmälan har "
        >
          <p className={styles.doneDescription}>
            Din felanmälan är nu skickad och vi kommer att se över din rapport så snart som möjligt. Om du uppgav din mail i förra steget så kommer du att få ett mail men en länk till ditt ärende.
          </p>
        </ScreenTitle>
        <Layout className="content">
          <div className={styles.doneCard}>
            <label>Ärende #number</label>
            {this.renderImages()}
            {address && <p className={styles.address}>{address}</p>}
            <p styles={styles.description}>{description}</p>
          </div>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {} } = state;
  return { ...report };
}

export default connect(
  mapStateToProps,
  undefined
)(Done);

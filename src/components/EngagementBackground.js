import React, { Component } from 'react';
import { connect } from 'react-redux';

import getCurrentEngagement from '../selectors/getCurrentEngagement';

class EngagementBackground extends Component {
  render() {
    const { backgroundImageSrc } = this.props;

    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundSize: 'cover',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  const engagement = getCurrentEngagement(state);

  return {
    backgroundImageSrc: engagement.backgroundImageSrc,
  };
};

export default connect(mapStateToProps)(EngagementBackground);

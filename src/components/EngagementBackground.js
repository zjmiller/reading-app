import React, { Component } from 'react';
import { connect } from 'react-redux';

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
			>
      </div>
    );
  }
}

const mapStateToProps = state => {
	const engagement = state.engagements[state.engagements.length - 1];
	
  return {
		backgroundImageSrc: engagement.backgroundImageSrc,
  };
};

export default connect(mapStateToProps)(EngagementBackground);
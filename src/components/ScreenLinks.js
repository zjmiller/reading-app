import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackBtn from './BackBtn';
import StoreLink from './StoreLink';

class ScreenLinks extends Component {
  render() {
    return (
      <div
				style={{
					display: 'flex',
					left: '10px',
					position: 'fixed',
					top: '10px',
					zIndex: 3,
				}}
			>
				<BackBtn />
        <StoreLink />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(ScreenLinks);
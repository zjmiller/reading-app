import React, { Component } from 'react';
import { connect } from 'react-redux';

import storeBackgroundImgSrc from '../assets/images/battleback4.png';

class StoreBackground extends Component {
  render() {
		
    return (
      <div
				style={{
					backgroundImage: `url(${storeBackgroundImgSrc})`,
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

export default connect()(StoreBackground);
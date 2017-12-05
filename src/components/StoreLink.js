import React, { Component } from 'react';
import { connect } from 'react-redux';

import navigateToStoreScreen from '../actions/navigateToStoreScreen';
import storeIconImgSrc from '../assets/images/store-icon.svg';

class StoreLink extends Component {
  render() {
		const { atStore, handleNavigateToStoreScreen } = this.props;
		
    return (
      <div
				onClick={() => !atStore && handleNavigateToStoreScreen()}
				style={{
					alignItems: 'center',
					backgroundColor: 'rgba(0,0,0,0.8)',
					borderRadius: '20px',
					display: 'flex',
					color: '#fff',
					cursor: atStore ? 'auto' : 'pointer',
					height: '40px',
					justifyContent: 'center',
					opacity: atStore ? 0.5 : 1,
					userSelect: 'none',
					width: '40px',
				}}
			>
        <img src={storeIconImgSrc} style={{ width: '20px' }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		atStore: state.session.currentScreen === 'STORE',
  };
};

const mapDispatchToProps = dispatch => ({
  handleNavigateToStoreScreen: () => dispatch(navigateToStoreScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreLink);
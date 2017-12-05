import React, { Component } from 'react';
import { connect } from 'react-redux';

import navigateToStoreScreen from '../actions/navigateToStoreScreen';

class StoreLink extends Component {
  render() {
		const { handleNavigateToStoreScreen } = this.props;
		
    return (
      <div
				onClick={handleNavigateToStoreScreen}
				style={{
					backgroundColor: 'rgba(0,0,0,0.7)',
					borderRadius: '20px',
					color: '#fff',
					cursor: 'pointer',
					padding: '10px',
				}}
			>
        Store
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  handleNavigateToStoreScreen: () => dispatch(navigateToStoreScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreLink);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import navigateBack from '../actions/navigateBack';

class BackBtn extends Component {
  render() {
		const { handleNavigateBack } = this.props;
		
    return (
      <div
				onClick={handleNavigateBack}
				style={{
					backgroundColor: 'rgba(0,0,0,0.7)',
					borderRadius: '20px',
					color: '#fff',
					cursor: 'pointer',
					padding: '10px',
				}}
			>
        Back
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  handleNavigateBack: () => dispatch(navigateBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackBtn);
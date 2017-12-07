import React, { Component } from 'react';
import { connect } from 'react-redux';

import navigateBack from '../actions/navigateBack';
import backBtnImgSrc from '../assets/images/back-arrow.svg';

class BackBtn extends Component {
  render() {
		const { handleNavigateBack, thereIsPrevScreen } = this.props;
		
    return (
      <div
				onClick={() => thereIsPrevScreen && handleNavigateBack()}
				style={{
					alignItems: 'center',
					backgroundColor: 'rgba(0,0,0,0.8)',
					borderRadius: '20px',
					display: 'flex',
					color: '#fff',
					cursor: thereIsPrevScreen ? 'pointer' : 'auto',
					height: '40px',
					justifyContent: 'center',
					opacity: thereIsPrevScreen ? 1 : 0.5,
					userSelect: 'none',
					width: '40px',
				}}
			>
        <img alt="Back Button" src={backBtnImgSrc} style={{ width: '20px' }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		thereIsPrevScreen: state.session.previousScreen !== undefined,
  };
};

const mapDispatchToProps = dispatch => ({
  handleNavigateBack: () => dispatch(navigateBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackBtn);
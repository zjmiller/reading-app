import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleLetterCase from '../actions/toggleLetterCase';

class ToggleCaseBtn extends Component {
  render() {
		const {
			handleToggleCase,
			showingUpperCase,
		} = this.props;
		
    return (
      <div
				onClick={handleToggleCase}
				style={{
					alignItems: 'center',
					background: 'rgba(250, 250, 251, 0.95)',
					boxShadow: '0 0 10px #000',
					borderRadius: '30px',
					color: '#000',
					cursor: 'pointer',
					display: 'flex',
					fontSize: '28px',
					fontWeight: 700,
					height: '60px',
					justifyContent: 'center',
					userSelect: 'none',
					width: '60px',
				}}
			>
        <span style={{
					opacity: showingUpperCase ? 1: 0.25,
				}}>A</span><span style={{
					opacity: showingUpperCase ? 0.25 : 1,
				}}>a</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		showingUpperCase: state.session.showingUpperCase,
  };
};

const mapDispatchToProps = dispatch => ({
  handleToggleCase: () => dispatch(toggleLetterCase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleCaseBtn);
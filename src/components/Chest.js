import React, { Component } from 'react';
import { connect } from 'react-redux';

import openChest from '../actions/openChest';
import chestImgSrc from '../assets/images/chest.png';
import getCurrentEngagement from '../selectors/getCurrentEngagement';

class Chest extends Component {
  render() {
		const {
			chest,
			handleOpenChest,
		} = this.props;
		
    return (
			<img
				onClick={handleOpenChest}
				src={chestImgSrc}
				style={{
					cursor: 'pointer',
					filter: chest.isPremium ? 'saturate(500%)' : '',
					opacity: 1,
					transition: 'opacity 0.4s',
					width: '100%',
				}} 
			/>
    );
  }
}

const mapStateToProps = state => {
	const currentEngagement = getCurrentEngagement(state);
	const chest = state.chests.find(chest => chest.id === currentEngagement.chestId);
	
  return {
		chest,
  };
};

const mapDispatchToProps = dispatch => ({
  handleOpenChest: () => dispatch(openChest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chest);
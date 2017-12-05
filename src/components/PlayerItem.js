import React, { Component } from 'react';
import { connect } from 'react-redux';

import useItem from '../actions/useItem';

class PlayerItem extends Component {
  render() {
		const {
			cooldownTimer,
			handleUseItem,
			item,
			style,
		} = this.props;
    return (
      <div
				onClick={() => handleUseItem(item.id)}
				style={Object.assign({
					position: 'relative',
				}, style)}
			>
				<img 
					src={item.imgSrc}
					style={Object.assign({
						boxShadow: '1px 1px 3px #333',
						cursor: 'pointer',
						filter: 'saturate(300%) hue-rotate(180deg)',
						width: '60px',
					})}
				/>
				{
					cooldownTimer > 0
					&&
					<div
						style={{
							alignItems: 'center',
							backgroundColor: 'rgba(0,0,0,0.75)',
							color: '#fff',
							display: 'flex',
							fontFamily: 'Georgia',
							fontSize: '48px',
							fontWeight: 700,
							justifyContent: 'center',
							position: 'absolute',
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
						}}
					>{ cooldownTimer }</div>
				}
      </div>
    );
  }
}

const mapStateToProps = (state, { playerItem }) => {
	const itemId = playerItem.itemId;
	const item = state.items.find(item => item.id === itemId);
	
  return {
		item,
		cooldownTimer: playerItem.cooldownTimer,
  };
};

const mapDispatchToProps = dispatch => ({
  handleUseItem: itemId => dispatch(useItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerItem);
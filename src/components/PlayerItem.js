import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerItem extends Component {
  render() {
		const {
			cooldown,
			item,
			style,
		} = this.props;
    return (
      <div>
				<img 
					src={item.imgSrc}
					style={Object.assign({
						boxShadow: '1px 1px 3px #333',
						filter: 'saturate(300%) hue-rotate(180deg)',
						width: '60px',
					}, style)}
				/>
      </div>
    );
  }
}

const mapStateToProps = (state, { playerItem }) => {
	const itemId = playerItem.itemId;
	const item = state.items.find(item => item.id === itemId);
	
  return {
		item,
		cooldown: playerItem.cooldown,
  };
};

export default connect(mapStateToProps)(PlayerItem);
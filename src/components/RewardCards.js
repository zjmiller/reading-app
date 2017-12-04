import React, { Component } from 'react';
import { connect } from 'react-redux';

import RewardCard from './RewardCard';
import getCurrentEngagement from '../selectors/getCurrentEngagement';

class RewardCards extends Component {
  render() {
		const { rewardCards } = this.props;
		
    return (
      <div
				style={{
					alignItems: 'center',
					display: 'flex',
					height: '410px',
					justifyContent: 'center',
				}}
			>
        {
					[rewardCards.map(rewardCard => 
						<RewardCard
							cardWidth={this.props.cardWidth}
							key={rewardCard.id}
							rewardCard={rewardCard}
						/>
					)]
				}
      </div>
    );
  }
}

const mapStateToProps = state => {
	const currentEngagement = getCurrentEngagement(state);
	const chest = state.chests.find(chest => chest.id === currentEngagement.chestId);
	const rewardCards = chest.rewardCards.map(rewardCardId =>
		state.rewardCards.find(rewardCard => rewardCard.id === rewardCardId)
	);
  
  return {
		rewardCards,
  };
};

export default connect(mapStateToProps)(RewardCards);
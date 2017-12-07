import gainReward from './gainReward';

export default function revealRewardCard(rewardCardId){
	return (dispatch, getState) => {
		const rewardCard = getState().rewardCards.find(rewardCard => rewardCard.id === rewardCardId);
		if (rewardCard.isRevealed) return;
		
		dispatch({
			type: 'REVEAL_REWARD_CARD',
			rewardCardId,
		});
		
		const rewardType = rewardCard.rewardType;
		const quantity = rewardCard.quantity;
		
		dispatch(gainReward(rewardType, quantity));
	};
}
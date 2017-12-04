import shortid from 'shortid';

export default function createRewardCard(rewardCardId) {
	return (dispatch, getState) => {
		const rewardTypeNumber = Math.ceil(Math.random() * 40);
		
		let rewardType;
		if (rewardTypeNumber <= 31) {
			rewardType = 'GOLD_COIN';
		} else if (rewardTypeNumber <= 34) {
			rewardType = 'BLUE_GEM';
		} else if (rewardTypeNumber <= 37) {
			rewardType = 'GREEN_GEM';
		} else if (rewardTypeNumber <= 40) {
			rewardType = 'RED_GEM';
		}
		
		let quantity;
		if (rewardType === 'GOLD_COIN') {
			quantity = Math.ceil(Math.random() * 20);
		} else {
			quantity = 1;
		}
		
		dispatch({
			type: 'CREATE_REWARD_CARD',
			id: rewardCardId,
			rewardType,
			quantity,
		});
	};
}
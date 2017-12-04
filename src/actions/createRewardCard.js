import shortid from 'shortid';

export default function createRewardCard(rewardCardId, isPremium) {
	return (dispatch, getState) => {
		const rewardTypeNumber = Math.ceil(Math.random() * 40);
		
		let rewardType;
		if (isPremium) {
			if (rewardTypeNumber <= 10) {
				rewardType = 'GOLD_COIN';
			} else if (rewardTypeNumber <= 20) {
				rewardType = 'BLUE_GEM';
			} else if (rewardTypeNumber <= 30) {
				rewardType = 'GREEN_GEM';
			} else if (rewardTypeNumber <= 40) {
				rewardType = 'RED_GEM';
			}
		} else {
			if (rewardTypeNumber <= 31) {
				rewardType = 'GOLD_COIN';
			} else if (rewardTypeNumber <= 34) {
				rewardType = 'BLUE_GEM';
			} else if (rewardTypeNumber <= 37) {
				rewardType = 'GREEN_GEM';
			} else if (rewardTypeNumber <= 40) {
				rewardType = 'RED_GEM';
			}
		}
		
		let quantity;
		if (rewardType === 'GOLD_COIN') {
			if (isPremium) quantity = 100;
			else quantity = Math.ceil(Math.random() * 10);
		} else {
			if (isPremium) quantity = 3;
			else quantity = 1;
		}
		
		dispatch({
			type: 'CREATE_REWARD_CARD',
			id: rewardCardId,
			rewardType,
			quantity,
			isPremium,
		});
	};
}
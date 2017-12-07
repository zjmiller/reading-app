export default function createRewardCard(rewardCardId, status) {
	return (dispatch, getState) => {
		const rewardTypeNumber = Math.ceil(Math.random() * 40);
		
		let rewardType;
		if (status === 'RARE') {
			if (rewardTypeNumber <= 25) {
				rewardType = 'GOLD_COIN';
			} else if (rewardTypeNumber <= 30) {
				rewardType = 'BLUE_GEM';
			} else if (rewardTypeNumber <= 35) {
				rewardType = 'GREEN_GEM';
			} else if (rewardTypeNumber <= 40) {
				rewardType = 'RED_GEM';
			}
		} else if (status === 'EPIC') {
			if (rewardTypeNumber <= 35) {
				rewardType = 'GOLD_COIN';
			} else if (rewardTypeNumber <= 30) {
				rewardType = 'BLUE_GEM';
			} else if (rewardTypeNumber <= 35) {
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
			if (status === 'RARE') quantity = 10 * Math.ceil(Math.random() * 10);
			else if (status === 'EPIC') quantity = 100 * Math.ceil(Math.random() * 10);
			else quantity = 1 * Math.ceil(Math.random() * 10);
		} else {
			if (status === 'RARE') quantity = 3;
			else if (status === 'EPIC') quantity = 10;
			else quantity = 1;
		}
		
		const isPremium = status !== 'NORMAL';
		
		dispatch({
			type: 'CREATE_REWARD_CARD',
			id: rewardCardId,
			rewardType,
			quantity,
			isPremium,
		});
	};
}
import shortid from 'shortid';

export default function createRewardCard(rewardCardId) {
	return (dispatch, getState) => {
		dispatch({
			type: 'CREATE_REWARD_CARD',
			id: rewardCardId,
			rewardType: 'BLUE_GEM',
			quantity: 3,
		});
	};
}
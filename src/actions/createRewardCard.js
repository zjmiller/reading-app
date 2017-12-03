import shortid from 'shortid';

export default function createRewardCard(rewardCardId) {
	dispatch({
		id: rewardCardId,
		type: 'BLUE_GEM',
		quantity: 3,
	});
}
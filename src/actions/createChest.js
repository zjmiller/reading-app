import shortid from 'shortid';
import createRewardCard from './createRewardCard';

export default function createChest(chestId) {
	return (dispatch, getState) => {
		const rewardCards = [];
		for (let i = 0; i < 3; i++) {
			const rewardCardId = shortid.generate();
			dispatch(createRewardCard(rewardCardId));
			rewardCards[i] = rewardCardId;
		}
		
		dispatch({
			type: 'CREATE_CHEST',
			id: chestId,
			isPremium: false,
			rewardCards,
		});
	}
}
import shortid from 'shortid';

export default function createChest(chestId) {
	return (dispatch, getState) => {
		const rewardCards = [];
		for (let i = 0; i < 3; i++) {
			const rewardCardId = shortid.generate();
			rewardCards[i] = rewardCardId;
		}
		
		dispatch({
			type: 'CREATE_CHEST',
			id: chestId,
			premium: false,
			rewardCards,
		});
	}
}
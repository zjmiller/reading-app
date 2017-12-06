import shortid from 'shortid';
import createRewardCard from './createRewardCard';
import getCurrentEngagement from '../selectors/getCurrentEngagement';

export default function createChest(chestId) {
	return (dispatch, getState) => {
		const engagement = getCurrentEngagement(getState());
		const word = getState().words.find(word => word.id === engagement.wordId);
		const chestMin = word.chestMin;
		
		let status;
		if (chestMin === 'EPIC') {
			status = 'EPIC';
		} else if (chestMin === 'RARE') {
			status = Math.random() > 0.7 ? 'EPIC' : 'RARE';
		} else {
			status = 
				Math.random() > 0.7
				? 
					(Math.random() > 0.7 ? 'EPIC' : 'RARE') 
				: 'NORMAL';
		}
		
		const rewardCards = [];
		for (let i = 0; i < 3; i++) {
			const rewardCardId = shortid.generate();
			dispatch(createRewardCard(rewardCardId, status));
			rewardCards[i] = rewardCardId;
		}
		
		const engagementId = engagement.id;
		
		dispatch({
			type: 'CREATE_CHEST',
			id: chestId,
			status,
			rewardCards,
			engagementId,
		});
	}
}
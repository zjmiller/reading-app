import shortid from 'shortid';
import createRewardCard from './createRewardCard';
import getCurrentEngagement from '../selectors/getCurrentEngagement';

export default function createChest(chestId) {
	return (dispatch, getState) => {
		const isPremium = Math.random() > 0.1 ? true : false;
		const rewardCards = [];
		for (let i = 0; i < 3; i++) {
			const rewardCardId = shortid.generate();
			dispatch(createRewardCard(rewardCardId, isPremium));
			rewardCards[i] = rewardCardId;
		}
		
		const engagement = getCurrentEngagement(getState());
		const engagementId = engagement.id;
		
		dispatch({
			type: 'CREATE_CHEST',
			id: chestId,
			isPremium,
			rewardCards,
			engagementId,
		});
	}
}
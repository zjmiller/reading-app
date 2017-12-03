export default function chestsReducer(state = [], action) {
	if (action.type === 'CREATE_REWARD_CARD') {
		return state.concat({
			id: action.id,
			isPremium: action.isPremium,
			rewardCards: action.rewardCards,
		});
	}
	
	return state;
}
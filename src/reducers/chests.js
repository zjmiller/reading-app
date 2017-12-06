export default function chestsReducer(state = [], action) {
	if (action.type === 'CREATE_CHEST') {
		return state.concat({
			id: action.id,
			status: action.status,
			rewardCards: action.rewardCards,
		});
	}
	
	return state;
}
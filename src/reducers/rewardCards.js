export default function chestsReducer(state = [], action) {
	if (action.type === 'CREATE_REWARD_CARD') {
		return state.concat({
			id: action.id,
			rewardType: action.rewardType,
			quantity: action.quantity,
		});
	}
	
	return state;
}
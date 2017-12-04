const initialState = {
	inEngagement: false,
	wealth: {
		'GOLD_COIN': 0,
		'BLUE_GEM': 0,
		'GREEN_GEM': 0,
		'RED_GEM': 0,
	},
	wordsSoFar: [],
};

export default function sessionReducer(state = initialState, action) {
	if (action.type === 'ENTER_ENGAGEMENT') {
		return Object.assign(
			{},
			state,
			{
				inEngagement: action.engagementId,
				engagementState: 'ANSWERING',
				receivingRewardState: false,
				wordsSoFar: state.wordsSoFar.concat(action.word),
			}
		);
	}
	
	if (action.type === 'SUCCESSFUL_ENGAGEMENT') {
		return Object.assign(
			{},
			state,
			{
				engagementState: 'RECEIVING_REWARD',
				receivingRewardState: 'CHEST_APPEARING',
			}
		);
	}
	
	if (action.type === 'OPEN_CHEST') {
		return Object.assign(
			{},
			state,
			{
				receivingRewardState: 'CHEST_OPENED',
			}
		);
	}
	
	if (action.type === 'GAIN_REWARD') {
		return Object.assign(
			{},
			state,
			{
				wealth: Object.assign(
					{},
					state.wealth,
					{
						[action.rewardType]: state.wealth[action.rewardType] + action.quantity,
					}
				),
			}
		);
	}
	
	return state;
}
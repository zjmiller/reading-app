const initialState = {
	inEngagement: false,
};

export default function sessionReducer(state = initialState, action) {
	if (action.type === 'ENTER_ENGAGEMENT') {
		return Object.assign(
			{},
			state,
			{
				inEngagement: action.engagementId,
				engagementState: 'ANSWERING',
			}
		);
	}
	
	if (action.type === 'SUCCESSFUL_ENGAGEMENT') {
		return Object.assign(
			{},
			state,
			{
				engagementState: 'RECEIVING_REWARD',
				receivingRewardState: 'CHEST_APPEARING'
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
	
	return state;
}
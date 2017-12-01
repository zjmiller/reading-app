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
			}
		);
	}
	
	return state;
}
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
			}
		);
	}
	
	return state;
}
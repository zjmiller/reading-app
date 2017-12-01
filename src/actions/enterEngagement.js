export default function enterEngagement(engagementId) {
	return (dispatch, getState) => {
		dispatch({
			type: 'ENTER_ENGAGEMENT',
			engagementId,
		});
	};
}
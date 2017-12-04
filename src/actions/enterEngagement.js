export default function enterEngagement(engagementId) {
	return (dispatch, getState) => {
		const engagement = getState().engagements.find(engagement => engagement.id === engagementId);
		const wordId = engagement.wordId;
		const word = getState().words.find(word => word.id === wordId).word;
		
		dispatch({
			type: 'ENTER_ENGAGEMENT',
			engagementId,
			word,
		});
	};
}
export default function checkIfAnswerCorrect(dispatch, getState) {
	const engagementId = getState().session.inEngagement;
	const engagement = getState().engagements.find(
		engagement => engagement.id === engagementId
	);
	const currentAnswerField = engagement.answerField;
	const currentWord = currentAnswerField.map(letterId => {
		const letter = getState().letters.find(letter => letter.id === letterId);
		return letter.letter;
	}).join('');
	const wordId = engagement.wordId;
	const word = getState().words.find(word => word.id === wordId);
	
	if (currentWord.toUpperCase() === word.word.toUpperCase()) {
		dispatch({
			type: 'SUCCESSFUL_ENGAGEMENT',
		});
	};
}
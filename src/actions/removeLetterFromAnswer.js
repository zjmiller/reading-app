export default function addLetterToAnswer(dispatch, getState, result) {
	const sourceIndex = result.source.index;
	const destinationIndex = result.destination.index;
	
	dispatch({
		type: 'REMOVE_LETTER_FROM_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
export default function addLetterToAnswer(dispatch, getState, result) {
	const sourceIndex = result.source.index;
	const destinationIndex = result.destination.index;
	
	dispatch({
		type: 'MOVE_LETTER_FROM_POOL_TO_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
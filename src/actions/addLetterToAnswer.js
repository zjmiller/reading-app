export default function addLetterToAnswer(dispatch, getState, result) {
	dispatch({
		type: 'MOVE_LETTER_FROM_POOL_TO_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
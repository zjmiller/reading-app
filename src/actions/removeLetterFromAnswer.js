export default function addLetterToAnswer(dispatch, getState, result) {
	dispatch({
		type: 'REMOVE_LETTER_FROM_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
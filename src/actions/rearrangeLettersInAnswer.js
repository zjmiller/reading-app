export default function rearrangeLettersInAnswer(dispatch, getState, result) {
	dispatch({
		type: 'REARRANGE_LETTERS_IN_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
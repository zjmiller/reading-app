export default function rearrangeLettersInAnswer(dispatch, getState, result) {
	const sourceIndex = result.source.index;
	const destinationIndex = result.destination.index;
	
	dispatch({
		type: 'REARRANGE_LETTERS_IN_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
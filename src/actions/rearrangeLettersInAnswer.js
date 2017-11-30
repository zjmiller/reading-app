export default function addLetterToAnswer(dispatch, getState, result) {
	const sourceIndex = result.source.index;
	const destinationIndex = result.destination.index;
	console.log(result);
	dispatch({
		type: 'REARRANGE_LETTERS_IN_ANSWER_FIELD',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
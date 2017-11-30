export default function rearrangeLettersInLetterPool(dispatch, getState, result) {
	const sourceIndex = result.source.index;
	const destinationIndex = result.destination.index;
	
	dispatch({
		type: 'REARRANGE_LETTERS_IN_LETTERS_POOL',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
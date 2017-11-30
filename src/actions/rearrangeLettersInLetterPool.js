export default function rearrangeLettersInLetterPool(dispatch, getState, result) {
	dispatch({
		type: 'REARRANGE_LETTERS_IN_LETTERS_POOL',
		destinationIndex: result.destination.index,
		sourceIndex: result.source.index,
	});
}
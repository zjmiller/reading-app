export default function createLetter(dispatch, getState, letterId, letter) {
	dispatch({
		type: 'CREATE_LETTER',
		id: letterId,
		letter,
	})
}
export default function lettersReducer(state = [], action) {
	if (action.type === 'CREATE_LETTER') {
		return state.concat({
			id: action.id,
			letter: action.letter,
		});
	}
	
	return state;
}
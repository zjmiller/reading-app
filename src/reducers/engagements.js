const initialState = [];

export default function wordsReducers(state = initialState, action) {
	if (action.type === 'CREATE_ENGAGEMENT') {
		return state.concat({
			wordId: action.wordId,
		});
	}
	
	return state;
}
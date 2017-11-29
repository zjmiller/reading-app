const initialState = [];

export default function wordsReducers(state = initialState, action) {
	if (action.type === 'CREATE_ENGAGEMENT') {
		return state.concat({
			answerField: [],
			backgroundImageSrc: action.backgroundImageSrc,
			lettersPool: action.lettersPool,
			wordId: action.wordId,
		});
	}
	
	if (action.type === 'MOVE_LETTER_FROM_POOL_TO_ANSWER_FIELD') {
		let newLettersPool = state[state.length - 1].lettersPool.concat();
		let newAnswerField = state[state.length - 1].answerField.concat();
		
		newAnswerField.splice(action.destinationIndex, 0, newLettersPool[action.sourceIndex]);
		newLettersPool = newLettersPool.filter((elem, index) => index !== action.sourceIndex);
		
		return state.map((engagement, i) => {
			if (i < state.length - 1) return engagement;
			else {
				return Object.assign(
					{},
					engagement,
					{
						answerField: newAnswerField,
						lettersPool: newLettersPool,
					}
				);
			}
		})
	}
	
	return state;
}
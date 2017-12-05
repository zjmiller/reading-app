const initialState = [];

export default function wordsReducers(state = initialState, action) {
	if (action.type === 'CREATE_ENGAGEMENT') {
		return state.concat({
			id: action.id,
			answerField: [],
			backgroundImageSrc: action.backgroundImageSrc,
			lettersPool: action.lettersPool,
			wordId: action.wordId,
		});
	}
	
	if (action.type === 'CREATE_CHEST') {
		console.log('HERE 1', action)
		return state.map(engagement => {
			if (engagement.id !== action.engagementId) return engagement;
			console.log('HERE 2')
			return Object.assign(
				{},
				engagement,
				{
					chestId: action.id,
				}
			);
		});
	}
	
	if (action.type === 'MOVE_ALL_LETTERS_BACK_TO_POOL') {
		let newLettersPool = state[state.length - 1].lettersPool.concat(state[state.length - 1].answerField);
		let newAnswerField = [];
		
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
	
	if (action.type === 'REMOVE_LETTER_FROM_ANSWER_FIELD') {
		let newLettersPool = state[state.length - 1].lettersPool.concat();
		let newAnswerField = state[state.length - 1].answerField.concat();
		
		newLettersPool.splice(action.destinationIndex, 0, newAnswerField[action.sourceIndex]);
		newAnswerField = newAnswerField.filter((elem, index) => index !== action.sourceIndex);
		
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
	
	if (action.type === 'REARRANGE_LETTERS_IN_ANSWER_FIELD') {
		
		let newAnswerField = state[state.length - 1].answerField.concat();
		
		if (action.sourceIndex === action.destinationIndex) return state;
		
		const tmp = newAnswerField[action.sourceIndex];
		newAnswerField[action.sourceIndex] = newAnswerField[action.destinationIndex];
		newAnswerField[action.destinationIndex] = tmp;
		
		return state.map((engagement, i) => {
			if (i < state.length - 1) return engagement;
			else {
				return Object.assign(
					{},
					engagement,
					{
						answerField: newAnswerField,
					}
				);
			}
		});
	}
	
	if (action.type === 'REARRANGE_LETTERS_IN_LETTERS_POOL') {
		
		let newLettersPool = state[state.length - 1].lettersPool.concat();
		
		if (action.sourceIndex === action.destinationIndex) return state;
		
		const tmp = newLettersPool[action.sourceIndex];
		newLettersPool[action.sourceIndex] = newLettersPool[action.destinationIndex];
		newLettersPool[action.destinationIndex] = tmp;
		
		return state.map((engagement, i) => {
			if (i < state.length - 1) return engagement;
			else {
				return Object.assign(
					{},
					engagement,
					{
						lettersPool: newLettersPool,
					}
				);
			}
		});
	}
	
	return state;
}
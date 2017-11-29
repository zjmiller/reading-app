import addLetterToAnswer from './addLetterToAnswer';

export default function handleLetterDrop(result) {
	return (dispatch, getState) => {
		if (
			result.source.droppableId === 'letters-pool' 
			&& 
			result.destination.droppableId === 'answer-field'
		) {
			addLetterToAnswer(dispatch, getState, result);
		}
	};
}
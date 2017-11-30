import addLetterToAnswer from './addLetterToAnswer';
import rearrangeLettersInAnswer from './rearrangeLettersInAnswer';

export default function handleLetterDrop(result) {
	return (dispatch, getState) => {
		if (
			result.source.droppableId === 'letters-pool' 
			&& 
			result.destination.droppableId === 'answer-field'
		) {
			addLetterToAnswer(dispatch, getState, result);
		} else if (
			result.source.droppableId === 'answer-field' 
			&& 
			result.destination.droppableId === 'answer-field'
		) {
			rearrangeLettersInAnswer(dispatch, getState, result);
		}
	};
}
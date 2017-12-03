import addLetterToAnswer from './addLetterToAnswer';
import checkIfAnswerCorrect from './checkIfAnswerCorrect';
import rearrangeLettersInAnswer from './rearrangeLettersInAnswer';
import rearrangeLettersInLetterPool from './rearrangeLettersInLetterPool';
import removeLetterFromAnswer from './removeLetterFromAnswer';

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
		} else if (
			result.source.droppableId === 'answer-field' 
			&& 
			result.destination.droppableId === 'letters-pool'
		) {
			removeLetterFromAnswer(dispatch, getState, result);
		} else if (
			result.source.droppableId === 'letters-pool' 
			&& 
			result.destination.droppableId === 'letters-pool'
		) {
			rearrangeLettersInLetterPool(dispatch, getState, result);
		}
		
		dispatch(checkIfAnswerCorrect());
	};
}
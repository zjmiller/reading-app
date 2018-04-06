import checkIfAnswerCorrect from './checkIfAnswerCorrect';
import getCurrentEngagement from '../selectors/getCurrentEngagement';

export default function toggleLetterPosition(letterId) {
  return (dispatch, getState) => {
    const engagement = getCurrentEngagement(getState());
    const isInAnswerField = engagement.answerField.indexOf(letterId) > -1;
    const isInLettersPool = engagement.lettersPool.indexOf(letterId) > -1;

    if (isInAnswerField) {
      dispatch({
        type: 'MOVE_LETTER_TO_BACK_OF_POOL',
        letterId,
      });
    } else if (isInLettersPool) {
      dispatch({
        type: 'MOVE_LETTER_TO_BACK_OF_ANSWER_FIELD',
        letterId,
      });
    }

    dispatch(checkIfAnswerCorrect());
  };
}

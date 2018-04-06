export default function addLetterToAnswer(result) {
  return (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_LETTER_FROM_ANSWER_FIELD',
      destinationIndex: result.destination.index,
      sourceIndex: result.source.index,
    });
  };
}

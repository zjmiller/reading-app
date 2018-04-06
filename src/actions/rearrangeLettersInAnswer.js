export default function rearrangeLettersInAnswer(result) {
  return (dispatch, getState) => {
    dispatch({
      type: 'REARRANGE_LETTERS_IN_ANSWER_FIELD',
      destinationIndex: result.destination.index,
      sourceIndex: result.source.index,
    });
  };
}

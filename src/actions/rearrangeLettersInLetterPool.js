export default function rearrangeLettersInLetterPool(result) {
  return (dispatch, getState) => {
    dispatch({
      type: 'REARRANGE_LETTERS_IN_LETTERS_POOL',
      destinationIndex: result.destination.index,
      sourceIndex: result.source.index,
    });
  };
}

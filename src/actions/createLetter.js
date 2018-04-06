export default function createLetter(
  dispatch,
  getState,
  letterId,
  letter,
  isInWord
) {
  dispatch({
    type: 'CREATE_LETTER',
    id: letterId,
    letter,
    isInWord,
  });
}

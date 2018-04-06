export default function lettersReducer(state = [], action) {
  if (action.type === 'CREATE_LETTER') {
    return state.concat({
      id: action.id,
      letter: action.letter,
      isInWord: action.isInWord,
    });
  }

  if (action.type === 'HIGHLIGHT_TILES_IN_WORD') {
    return state.map(letter => {
      if (!letter.isInWord) return letter;
      else
        return Object.assign({}, letter, {
          isHighlighted: true,
        });
    });
  }

  return state;
}

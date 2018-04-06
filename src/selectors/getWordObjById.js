export default function getWordObjById(state, wordId) {
  return state.words.find(word => word.id === wordId);
}

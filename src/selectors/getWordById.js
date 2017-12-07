export default function getWordById(state, wordId) {
	return state.words.find(word => word.id === wordId);
}
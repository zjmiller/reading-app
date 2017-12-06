export default function hasCompletedAllWords(state) {
	const words = state.words;
	const wordsSoFar = state.session.wordsSoFar;
	return words.length <= wordsSoFar.length;
}
import getRandomInteger from '../util/getRandomInteger';

export default function getNewRandomWord(state) {
	const words = state.words;
	const wordsSoFar = state.session.wordsSoFar;
	
	let wordsPool;
	if (words.length <= wordsSoFar.length) wordsPool = words;
	else wordsPool = words.filter(word => wordsSoFar.indexOf(word.word) === -1);

	const randomIndex = getRandomInteger(0, wordsPool.length - 1);
	return wordsPool[randomIndex];
}
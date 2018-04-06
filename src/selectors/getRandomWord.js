import getRandomInteger from '../util/getRandomInteger';

export default function getRandomWord(state) {
  const words = state.words;
  const randomIndex = getRandomInteger(0, words.length - 1);
  return words[randomIndex];
}

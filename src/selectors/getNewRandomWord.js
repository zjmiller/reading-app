import getRandomInteger from "../util/getRandomInteger";
import _ from "lodash";

export default function getNewRandomWord(state) {
  const words = state.words.slice(24);
  console.log("words", words);
  const wordsSoFar = _(state.session.wordsSoFar)
    .intersection(words.map((word) => word.word))
    .uniq()
    .value();

  console.log("wordsSoFar", wordsSoFar);

  let wordsPool;
  if (words.length <= wordsSoFar.length) wordsPool = words;
  else wordsPool = words.filter((word) => wordsSoFar.indexOf(word.word) === -1);

  const randomIndex = getRandomInteger(0, wordsPool.length - 1);
  return wordsPool[randomIndex];
}

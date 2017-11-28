export default function shuffleArray(originalArray) {
	// modified from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const array = originalArray.concat();
	
	let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
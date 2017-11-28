export default function getRandomUpperCaseLetter () {
	return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}
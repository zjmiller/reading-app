export default function saveState(state) {
	console.log('here', state);
	localStorage.setItem('READING_APP_STATE', JSON.stringify(state));
}
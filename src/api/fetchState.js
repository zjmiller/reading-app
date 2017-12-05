export default function fetchState() {
	return JSON.parse(localStorage.getItem('READING_APP_STATE')) || {};
}
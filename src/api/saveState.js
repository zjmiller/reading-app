export default function saveState(state) {
  localStorage.setItem('READING_APP_STATE', JSON.stringify(state));
}

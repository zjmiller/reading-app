export default function saveWealthInformation(state) {
	localStorage.setItem('GOLD_COIN', state.session.wealth['GOLD_COIN']);
	localStorage.setItem('BLUE_GEM', state.session.wealth['BLUE_GEM']);
	localStorage.setItem('GREEN_GEM', state.session.wealth['GREEN_GEM']);
	localStorage.setItem('RED_GEM', state.session.wealth['RED_GEM']);
}
export default function fetchWealthInformation() {
	return {
		GOLD_COIN: +localStorage.getItem('GOLD_COIN'),
		BLUE_GEM: +localStorage.getItem('BLUE_GEM'),
		GREEN_GEM: +localStorage.getItem('GREEN_GEM'),
		RED_GEM: +localStorage.getItem('RED_GEM'),
	};
}
export default function getCurrentEngagement(state) {
	return state.engagements[state.engagements.length - 1];
}
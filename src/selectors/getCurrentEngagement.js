export default function getCurrentEngagement(state) {
	if (state.engagements.length === 0) return undefined;
	return state.engagements[state.engagements.length - 1];
}
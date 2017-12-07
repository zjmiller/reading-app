export default function getEngagementById(state, engagementId) {
	return state.engagements.find(engagement => engagement.id === engagementId);
}
export default function doesPlayerOwnItem(state, itemId) {
  return state.session.items.find(item => item.itemId === itemId);
}

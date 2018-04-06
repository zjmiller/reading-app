import shortid from 'shortid';
import createChest from './createChest';

export default function succeedAtEngagement() {
  return (dispatch, getState) => {
    const chestId = shortid.generate();
    dispatch(createChest(chestId));
    dispatch({
      type: 'SUCCESSFUL_ENGAGEMENT',
    });
  };
}

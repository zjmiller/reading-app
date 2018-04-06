import React, { Component } from 'react';
import { connect } from 'react-redux';

import openChest from '../actions/openChest';
import chestImgSrc from '../assets/images/chest.png';
import getCurrentEngagement from '../selectors/getCurrentEngagement';

class Chest extends Component {
  render() {
    const { chest, handleOpenChest } = this.props;

    let filter;
    if (chest.status === 'PREMIUM') filter = 'saturate(500%)';
    if (chest.status === 'RARE')
      filter =
        'saturate(500%) hue-rotate(210deg) contrast(120%) brightness(150%)';
    if (chest.status === 'EPIC')
      filter =
        'saturate(500%) hue-rotate(290deg) contrast(120%) brightness(150%)';

    return (
      <img
        alt="Treasure Chest"
        onClick={handleOpenChest}
        src={chestImgSrc}
        style={{
          cursor: 'pointer',
          filter: filter,
          opacity: 1,
          transition: 'opacity 0.4s',
          width: '100%',
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  const engagement = getCurrentEngagement(state);
  const chest = state.chests.find(chest => chest.id === engagement.chestId);

  return {
    chest,
  };
};

const mapDispatchToProps = dispatch => ({
  handleOpenChest: () => dispatch(openChest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chest);

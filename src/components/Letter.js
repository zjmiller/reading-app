import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import toggleLetterPosition from '../actions/toggleLetterPosition';
import woodTextureUrl from '../assets/images/wood-texture.png';

class Letter extends Component {
  render() {
    const { handleToggleLetterPosition, letter, showingUpperCase } = this.props;

    return (
      <Draggable draggableId={letter.id}>
        {(provided, snapshot) => (
          <div onDoubleClick={() => handleToggleLetterPosition(letter.id)}>
            <div
              ref={provided.innerRef}
              style={Object.assign({}, provided.draggableStyle, {
                alignItems: 'center',
                display: 'flex',
                filter: letter.isHighlighted ? 'saturate(1000%)' : '',
                height: '90px',
                fontWeight: '700',
                justifyContent: 'center',
                userSelect: 'none',
                width: '70px',
              })}
            >
              <div
                style={{
                  alignItems: 'center',
                  backgroundImage: `url(${woodTextureUrl})`,
                  border: '3px solid #111',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '50px',
                  fontSize: '28px',
                  fontWeight: '700',
                  justifyContent: 'center',
                  margin: '0 10px',
                  width: '50px',
                }}
                {...provided.dragHandleProps}
              >
                {showingUpperCase ? letter.letter : letter.letter.toLowerCase()}
              </div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => {
  return {
    showingUpperCase: state.session.showingUpperCase,
  };
};

const mapDispatchToProps = dispatch => ({
  handleToggleLetterPosition: letterId =>
    dispatch(toggleLetterPosition(letterId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Letter);

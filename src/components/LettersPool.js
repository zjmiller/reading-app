import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import Letter from './Letter';

import getCurrentEngagement from '../selectors/getCurrentEngagement';

class LettersPool extends Component {
  render() {
    const { letters } = this.props;

    return (
      <Droppable direction="horizontal" droppableId="letters-pool">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              display: 'flex',
              height: '90px',
              margin: 'auto',
              width: '600px',
            }}
          >
            {letters &&
              letters.map((letter, i) => (
                <Letter key={i} i={i} letter={letter} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

const mapStateToProps = state => {
  const engagement = getCurrentEngagement(state);
  const letters = engagement.lettersPool.map(letterId =>
    state.letters.find(letter => letter.id === letterId)
  );

  return {
    letters,
  };
};

export default connect(mapStateToProps)(LettersPool);

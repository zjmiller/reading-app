import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Letter from './Letter';

class LettersPool extends Component {
  render() {
		const { letters } = this.props;
		
    return (
			<Droppable direction="horizontal" droppableId="letters-pool">
			{
				(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
			      {
							letters && letters.map((letter, i) => <Letter key={i} i={i} letter={letter} />)
						}
						{ provided.placeholder }
			    </div>
				)
			}
			</Droppable>
    );
  }
}

const mapStateToProps = state => {
	if (state.engagements.length === 0) return {};
	const engagement = state.engagements[state.engagements.length - 1];
	const letters = engagement.lettersPool.map(letterId => state.letters.find(letter => letter.id === letterId));
	
  return {
		letters,
  };
};

export default connect(mapStateToProps)(LettersPool);
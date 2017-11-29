import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Letter from './Letter';

class AnswerField extends Component {
  render() {
		const { letters } = this.props;
		
    return (
			<div
				style={{
					height: '200px',
					margin: 'auto',
					width: '600px',
				}}
			>
				<Droppable direction="horizontal" droppableId="answer-field">
					{
						(provided, snapshot) => (
							<div
								ref={provided.innerRef}
								style={{
									borderBottom: '3px solid gray',
									display: 'flex',
									height: '60px',
									width: '600px',
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
			</div>
    );
  }
}

const mapStateToProps = state => {
	if (state.engagements.length === 0) return {};
	const engagement = state.engagements[state.engagements.length - 1];
	const letters = engagement.answerField.map(letterId => state.letters.find(letter => letter.id === letterId));
  return {
		letters,
  };
};

export default connect(mapStateToProps)(AnswerField);
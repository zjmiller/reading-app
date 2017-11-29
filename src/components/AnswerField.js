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
					height: '100px',
					margin: 'auto',
					width: '600px',
				}}
			>
				<Droppable direction="horizontal" droppableId="answer-field">
					{
						(provided, snapshot) => (
							<div
								style={{
									position: 'relative',
								}}
							>
								<div
									style={{
										background: snapshot.isDraggingOver ? 'rgba(230, 230, 255, 0.75)' : 'rgba(255, 255, 255, 0.75)',
										boxShadow: '0 0 10px #666 inset',
										position: 'absolute',
											bottom: '-20px',
											left: '-10px',
											right: '-10px',
											top: '-20px',
										zIndex: 1,
									}}
								/>
								<div
									ref={provided.innerRef}
									style={{
										display: 'flex',
										height: '50px',
										position: 'relative',
										width: '600px',
										zIndex: 2,
									}}
								>
									{
										letters && letters.map((letter, i) => <Letter key={i} i={i} letter={letter} />)
									}
									{ provided.placeholder }
								</div>	
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
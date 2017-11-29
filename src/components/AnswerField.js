import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

class AnswerField extends Component {
  render() {
    return (
			<div
				style={{
					height: '200px',
					margin: 'auto',
					width: '600px',
				}}
			>
				<Droppable droppableId="answer-field">
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
  return {

  };
};

export default connect(mapStateToProps)(AnswerField);
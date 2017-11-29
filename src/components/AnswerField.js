import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

class AnswerField extends Component {
  render() {
    return (
			<Droppable droppableId="answer-field">
				{
					(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={{
								border: '1px solid gray',
								height: '200px',
								width: '600px',
							}}
						>
							
						</div>	
					)
				}
			</Droppable>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(AnswerField);
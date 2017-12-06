import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import NonDraggableLetter from './NonDraggableLetter';

class AnswerModal extends Component {
	render() {
		const {
			letters,
			isShowing
		} = this.props;
		
    return (
      <div>
				<Modal show={isShowing}>
					<Modal.Body 
						style={{
							alignItems: 'center',
							borderRadius: '5px',
							display: 'flex',
							height: '100px',
							justifyContent: 'center',
						}}
					>
					{ letters.map((letter, i) => <NonDraggableLetter 
							key={`answer-letter-${i}`}
							letter={{
								id: `answer-letter-${i}`, 
								isHighlighted: false,
								letter: letter.toUpperCase(),
							}}
						/>
					)}
					</Modal.Body>
				</Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
	const engagement = state.engagements[state.engagements.length - 1];
	
	if (!engagement) return {
		isShowing: state.session.showingAnswerModal,
		letters: [],
	};
	
	const word = state.words.find(word => word.id === engagement.wordId);
	
	const letters = word.word.split('');
	
  return {
		isShowing: state.session.showingAnswerModal,
		letters: letters,
  };
};

export default connect(mapStateToProps)(AnswerModal);
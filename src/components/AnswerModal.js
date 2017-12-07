import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import NonDraggableLetter from './NonDraggableLetter';

import getCurrentEngagement from '../selectors/getCurrentEngagement';
import getWordValOfEngagement from '../selectors/getWordValOfEngagement';

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
	const engagement = getCurrentEngagement(state);
	
	if (!engagement) return {
		isShowing: false,
		letters: [],
	};
	
	const wordVal = getWordValOfEngagement(state, engagement);
	
	const letters = wordVal.split('');
	
  return {
		isShowing: state.session.showingAnswerModal,
		letters: letters,
  };
};

export default connect(mapStateToProps)(AnswerModal);
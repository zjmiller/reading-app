import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import chestImgSrc from '../assets/images/chest.jpg';

class SuccessModal extends Component {
  render() {
		const { isReceivingReward } = this.props;
		
    return (
      <div>
			<Modal show={isReceivingReward}>
				<Modal.Header>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img src={chestImgSrc} style={{ width: '100%' }} />
				</Modal.Body>
			</Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(SuccessModal);
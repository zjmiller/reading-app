import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import chestImgSrc from '../assets/images/chest.jpg';

class SuccessModal extends Component {
  render() {
    return (
      <div>
			<Modal show={false} onHide={_ => alert()}>
				<Modal.Header closeButton>
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
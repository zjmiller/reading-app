import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import backgroundImageSrc from '../assets/images/battleback8.png';
import chestImgSrc from '../assets/images/chest.png';

class SuccessModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chestOpacity: 0,
		};
	}
	
	componentWillReceiveProps(nextProps) {
			if (this.props.isReceivingReward !== nextProps.isReceivingReward) {
				setTimeout(() => this.setState({chestOpacity: 1}), 500);
			}
	}
	
  render() {
		const { isReceivingReward } = this.props;
		
    return (
      <div>
				<Modal show={isReceivingReward} style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
					<Modal.Body 
						style={{
							backgroundImage: `url(${backgroundImageSrc})`,
							backgroundSize: 'cover',
							borderRadius: '5px',
						}}>
						<img
							src={chestImgSrc}
							style={{
								opacity: this.state.chestOpacity,
								transition: 'opacity 1s',
								width: '100%',
							}} 
						/>
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
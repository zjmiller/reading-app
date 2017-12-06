import React, { Component } from 'react';
import { connect } from 'react-redux';
import woodTextureUrl from '../assets/images/wood-texture.png';

class Letter extends Component {
  render() {
		const { letter } = this.props;
		
    return (
			<div
				style={{
					alignItems: 'center',
					display: 'flex',
					filter: letter.isHighlighted ? 'saturate(1000%)' : '',
					height: '90px',
					fontWeight: '700',
					justifyContent: 'center',
					userSelect: 'none',
					width: '70px',
				}}
			>
				<div
					style={{
						alignItems: 'center',
						backgroundImage: `url(${woodTextureUrl})`,
						border: '3px solid #111',
						borderRadius: '6px',
						cursor: 'pointer',
						display: 'flex',
						height: '50px',
						fontSize: '28px',
						fontWeight: '700',
						justifyContent: 'center',
						margin: '0 10px',
						width: '50px',
					}}
				>
					{ letter.letter }
				</div>
      </div>	
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(Letter);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';

class LettersPool extends Component {
  render() {
		const { letters } = this.props;
		
    return (
      <div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
        {
					letters && letters.map((letter, i) => <Letter key={i} letter={letter} />)
				}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(LettersPool);
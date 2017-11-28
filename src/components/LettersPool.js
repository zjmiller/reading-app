import React, { Component } from 'react';
import { connect } from 'react-redux';

class LettersPool extends Component {
  render() {
		const { letters } = this.props;
		
    return (
      <div>
        {
					letters && letters.map((letter, i) => <div key={i}>{letter}</div>)
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
import React, { Component } from 'react';
import UpdatedCounterHOC from '../withCounter';

class ButtonHandler extends Component {
  // Now The count and Event handler Will came here as a Props
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>Click {this.props.count} Times</button>
      </div>
    );
  }
}

export default UpdatedCounterHOC(ButtonHandler, 5)
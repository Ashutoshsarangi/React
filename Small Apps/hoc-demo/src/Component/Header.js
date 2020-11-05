import React, { Component } from 'react';
import UpdatedCounterHOC from '../withCounter';


class HeaderHandler extends Component {
  render() {
    return (
      <h2 onMouseOver={this.props.handler}>Header {this.props.count} time Hover</h2>
    );
  }
}

export default UpdatedCounterHOC(HeaderHandler, 10);
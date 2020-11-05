// NOTE

// let newComponent = higherOrderComponent(originalComponent)

import React, { Component } from 'react';

const UpdatedCounterHOC = (OriginalComponent, increment) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
    }
    incrementHandler() {
      this.setState((preState) => {
        return { count: preState.count + increment };
      })
    }
    render() {
      return <OriginalComponent count={this.state.count} handler={() => this.incrementHandler()} {...this.props} />
    }
  }
  return NewComponent;
}

export default UpdatedCounterHOC;

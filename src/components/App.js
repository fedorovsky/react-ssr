import React, { Component } from 'react';

class App extends Component {
  state = {
    title: 'World',
  };

  render() {
    return <div>Hello {this.state.title}</div>;
  }
}

export default App;

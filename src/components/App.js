import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    title: 'World',
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.title}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.session.message,
});

export default connect(mapStateToProps)(App);

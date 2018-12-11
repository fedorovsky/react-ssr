import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { messageSelector, addMessage } from '../ducks/notification';

class App extends Component {
  state = {
    title: 'Hello World',
  };

  render() {
    return (
      <div>
        <h2>[STATE]: {this.state.title}</h2>
        <h2>[PROPS]: {this.props.message}</h2>
        <button onClick={() => this.props.addMessage('CHANGE MESSAGE')}>
          ADD MESSAGE
        </button>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/" exact render={() => <h1>home</h1>} />
          <Route path="/about" exact render={() => <h1>about</h1>} />
          <Route path="/contact" exact render={() => <h1>contact</h1>} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({
    message: messageSelector(state),
  }),
  { addMessage },
)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { messageSelector, addMessage } from '../ducks/notification';

import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
  state = {
    title: 'Hello World',
  };

  render() {
    return (
      <div>
        <h1>APP</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { messageSelector, addMessage } from '../ducks/notification';

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

        {/* RENDER ROUTES */}
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}

export default App;

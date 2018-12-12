import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { messageSelector, addMessage } from '../modules/notification';

class Home extends Component {
  state = {
    title: 'Hello World',
  };

  componentWillMount() {
    console.log('[componentWillMount] Home');
  }

  componentDidMount() {
    console.log('[componentDidMount] Home', this.props);
  }

  render() {
    return (
      <div>
        <h2>[STATE]: {this.state.title}</h2>
        <h2>[PROPS]: {this.props.message}</h2>
        <button onClick={() => this.props.addMessage('CHANGE MESSAGE')}>
          ADD MESSAGE
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    message: messageSelector(state),
  }),
  { addMessage },
)(Home);

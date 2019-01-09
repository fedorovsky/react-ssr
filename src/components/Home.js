import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { messageSelector, addMessage } from '../modules/notification';

const Container = styled.div`
  margin: 100px;
  width: 100px;
  height: 100px;
  border: 1px solid red;
  background: #ccc;
`;

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
      <Fragment>
        <Helmet>
          <title>Home page</title>
        </Helmet>
        <div>
          <h2>Home page</h2>
          <h2>[STATE]: {this.state.title}</h2>
          <h2>[PROPS]: {this.props.message}</h2>
          <button onClick={() => this.props.addMessage('CHANGE MESSAGE')}>
            ADD MESSAGE
          </button>
          <Container />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    message: messageSelector(state),
  }),
  { addMessage },
)(Home);

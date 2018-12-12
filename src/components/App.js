import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styledNormalize from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

const NormalizeStyle = createGlobalStyle(styledNormalize);

const StyledLink = styled(NavLink)`
  color: blue;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

class App extends Component {
  state = {
    title: 'Hello World',
  };

  render() {
    return (
      <Fragment>
        <NormalizeStyle />

        <h1>APP</h1>
        <div>
          <StyledLink exact to="/">
            Index
          </StyledLink>
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
        </div>

        {/* RENDER ROUTES */}
        {renderRoutes(this.props.route.routes)}
      </Fragment>
    );
  }
}

export default App;

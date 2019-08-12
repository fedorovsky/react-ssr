import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styledNormalize from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import Select from '../Select';
import styles from './style.css';

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
  render() {
    return (
      <Fragment>
        <NormalizeStyle />
        <h1 className={styles.title}>APP</h1>
        <Select />

        {/* NAVIGATION */}
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

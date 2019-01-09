import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const BackgroundImg = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
  background: url('/public/img/img.png') center center no-repeat #ccc;
  background-size: contain;
`;

const About = props => {
  return (
    <Fragment>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <div>
        <h2>About page</h2>
        <div>
          <StyledLink to="/about/first">Nested First</StyledLink>
          <StyledLink to="/about/second">Nested Second</StyledLink>
        </div>
        {/* IMG EXAMPLE */}
        <img src="/public/img/img.png" />
        <BackgroundImg />
        {/* RENDER NESTED ROUTES /about/... */}
        {renderRoutes(props.route.routes)}
      </div>
    </Fragment>
  );
};

export default About;

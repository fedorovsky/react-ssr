import React from 'react';
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

const About = props => {
  return (
    <div>
      <h2>About page</h2>
      <div>
        <StyledLink to="/about/first">Nested First</StyledLink>
        <StyledLink to="/about/second">Nested Second</StyledLink>
      </div>
      {/* IMG EXAMPLE */}
      <img src="/public/img/img.png" />
      {/* RENDER NESTED ROUTES /about/... */}
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default About;

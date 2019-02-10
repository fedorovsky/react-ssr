import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const NotFound = (props: RouteComponentProps) => {
  if (props.staticContext) {
    props.staticContext.statusCode = 404;
  }
  return (
    <React.Fragment>
      <h1>404 : Not Found</h1>
    </React.Fragment>
  );
};

export default NotFound;

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const getDisplayName = Component => {
  return Component.displayName || Component.name || 'Component';
};

const withPageTitle = title => Component => {
  class withPageTitle extends React.Component {
    render() {
      return (
        <Fragment>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Component {...this.props} />
        </Fragment>
      );
    }
  }
  withPageTitle.displayName = `withPageTitle(${getDisplayName(Component)})`;
  return withPageTitle;
};

export default withPageTitle;

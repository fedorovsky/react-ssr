import App from './components/App';
import Home from './components/Home';
import Users from './components/Users';
import NotFound from './components/NotFound';

import About from './components/About';
import NestedFirst from './components/About/NestedFirst';
import NestedSecond from './components/About/NestedSecond';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/home', component: Home },
      { path: '/users', component: Users },
      {
        path: '/about',
        component: About,
        routes: [
          {
            path: '/about/first',
            component: NestedFirst,
          },
          {
            path: '/about/second',
            component: NestedSecond,
          },
        ],
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];

export default routes;

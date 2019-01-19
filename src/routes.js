import App from './components/App';
import Home from './pages/Home';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

import About from './pages/About';
import NestedFirst from './pages/About/NestedFirst';
import NestedSecond from './pages/About/NestedSecond';

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

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/home', component: Home },
      { path: '/about', component: About },
      { path: '/users', component: Users },
      {
        path: '*',
        component: Home,
      },
    ],
  },
];

export default routes;

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/home', component: Home },
      { path: '/about', component: About },
      { path: '/contact', component: Contact },
      {
        path: '*',
        component: Home,
      },
    ],
  },
];

export default routes;

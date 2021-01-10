import Home from 'pages/Home';
import AddArticle from 'pages/AddArticle';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-article',
    name: 'Add article',
    component: AddArticle,
  },
];

export default routes;

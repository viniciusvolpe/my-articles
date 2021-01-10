import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';
import routes from 'pages/routes';

function App() {
  function mapRoutes() {
    return routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component}></Route>
    ));
  }
  return (
    <Router>
      <Nav />
      <Switch>{mapRoutes()}</Switch>
    </Router>
  );
}

export default App;

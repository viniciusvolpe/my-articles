import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';
import routes from 'pages/routes';
import styled from 'styled-components';

const Main = styled.main`
  background: ${(props) => props.theme.main.palete.background};
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.main.palete.color};
  font-family: 'Amiga Forever', sans-serif;
`;

function App() {
  function mapRoutes() {
    return routes.map(({ path, component }) => (
      <Route key={path} exact path={path} component={component}></Route>
    ));
  }
  return (
    <Main>
      <Router>
        <Nav />
        <Switch>{mapRoutes()}</Switch>
      </Router>
    </Main>
  );
}

export default App;

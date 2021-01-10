// @flow

import routes from 'pages/routes';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const fontSize = (props) => props.theme.main.font.small;

const setBorder = (props) =>
  props.active ? `border-bottom: 2px solid ${props.theme.main.palete.primary}` : null;

const List = styled.ol`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
  font-size: ${fontSize};
`;

const ListItem = styled.li`
  margin: 0 15px;
  ${setBorder};
  a {
    padding: 10px;
  }
`;

function Nav(): React.Node {
  const location = useLocation();
  function mapRoutes() {
    return routes.map(({ path, name }) => (
      <ListItem key={`${path}-${name}`} active={location.pathname === path}>
        <Link to={path}>{name}</Link>
      </ListItem>
    ));
  }

  return (
    <nav>
      <List>{mapRoutes()}</List>
    </nav>
  );
}

export default Nav;

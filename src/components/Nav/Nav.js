import routes from 'pages/routes';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  function mapRoutes() {
    return routes.map(({ path, name }) => (
      <li key={`${path}-${name}`}>
        <Link to={path}>{name}</Link>
      </li>
    ));
  }

  return (
    <nav>
      <ul>{mapRoutes()}</ul>
    </nav>
  );
}

export default Nav;

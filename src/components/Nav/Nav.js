import routes from 'pages/routes';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  function mapRoutes() {
    return routes.map(({ path, name }) => (
      <li>
        <Link to={path} key={`${path}-${name}`}>
          {name}
        </Link>
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

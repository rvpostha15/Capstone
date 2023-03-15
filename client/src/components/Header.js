import React from 'react';
// import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <div className="vertical-menu">
        <NavLink className="item" exact to="/" activeClassName="active">
            AssignMint
        </NavLink>
        <NavLink className="item" to="/students" activeClassName="active">
            Students
        </NavLink>
        <NavLink className="item" to="/decks" activeClassName="active">
            Decks
        </NavLink>
    </div>
  );
}

export default Header;

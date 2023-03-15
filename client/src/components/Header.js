import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <Menu className="vertical-menu" vertical>
        <Menu.Item as={NavLink} exact to="/" activeClassName="active">
            AssignMint
        </Menu.Item>
        <Menu.Item as={NavLink} to="/students" activeClassName="active">
            Students
        </Menu.Item>
        <Menu.Item as={NavLink} to="/decks" activeClassName="active">
            Decks
        </Menu.Item>
    </Menu>
  );
}

export default Header;

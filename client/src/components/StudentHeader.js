import React from 'react';
// import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function StudentHeader() {
  return (
    <div className="vertical-menu">
        <NavLink className="item" exact to="/student-dashboard" activeClassName="active">
            AssignMint
        </NavLink>
        <NavLink className="item" to="/my-assignments" activeClassName="active">
            My Assignments
        </NavLink>
        {/* <NavLink className="item" to="/decks" activeClassName="active">
            Decks
        </NavLink>
        <NavLink className="item" to="/new-assignment" activeClassName="active">
            New Assignment
        </NavLink> */}
    </div>
  );
}

export default StudentHeader;

// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#f4f4f4', height: '100vh', padding: '20px' }}>
      <h3>Event Manager</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <NavLink to="/" style={{ textDecoration: 'none' }} activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/participant-management" style={{ textDecoration: 'none' }} activeClassName="active">
            Participant Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/session-management" style={{ textDecoration: 'none' }} activeClassName="active">
            Session Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/social-media-management" style={{ textDecoration: 'none' }} activeClassName="active">
            Social Media Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/reminder-management" style={{ textDecoration: 'none' }} activeClassName="active">
            Reminder Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile-management" style={{ textDecoration: 'none' }} activeClassName="active">
            Profile Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-permission-management" style={{ textDecoration: 'none' }} activeClassName="active">
            User Permission Management
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

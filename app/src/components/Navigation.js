import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/BV_Logo_transparent.png';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" width={188} height={60.75} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                  Startseite
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/fourier-transformation">
                  Fourier
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;

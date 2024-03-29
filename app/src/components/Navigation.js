import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/BV_Logo_transparent.png';
import { labels } from '../assets/data/labels';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">



          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" width={188} height={60.75} />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                  {labels.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/fourier-transformation">
                {labels.fourier}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">
                {labels.about}
                </NavLink>
              </li>
            </ul>
          </div>

          <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                  {labels.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/fourier-transformation">
                {labels.fourier}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">
                {labels.about}
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

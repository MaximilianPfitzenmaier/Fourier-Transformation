import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <>
        <span> © {new Date().getFullYear()} Giang & Pfitzenmaier | All Rights Reserved</span>
        <NavLink to="/legal-notice">Legal Notice</NavLink>
      </>
    );
  }
}

export default Footer;

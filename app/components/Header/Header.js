import React from 'react';

import Logo from './../../images/logo.png';

const Header = () => (
  <header className="header">
    <img src={Logo} className="logo"/>

    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list__item">Home</li>
        <li className="navigation-list__item">About</li>
        <li className="navigation-list__item">Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;

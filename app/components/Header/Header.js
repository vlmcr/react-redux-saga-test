import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../images/logo.png';

const Header = () => (
  <header className="header container">
    <Link to={'/'}><img src={Logo} className="logo" alt="app logo"/></Link>

    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list__item"><Link to={'/'}>Home</Link></li>
        <li className="navigation-list__item"><Link to={'/about'}>About</Link></li>
        <li className="navigation-list__item"><Link to={'/contacts'}>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

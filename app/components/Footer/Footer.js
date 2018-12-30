import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">

      <Link to={'/'}><h3 className="footer__text-logo">Umda</h3></Link>

      <nav className="navigation">
        <ul className="navigation-list navigation-list--inverse">
          <li className="navigation-list__item"><Link to={'/'}>Home</Link></li>
          <li className="navigation-list__item"><Link to={'/about'}>About</Link></li>
          <li className="navigation-list__item"><Link to={'/contacts'}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;

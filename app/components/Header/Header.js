import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../images/logo.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: '',
      isOpen: false
    };

    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.htmlRef = document.querySelector('html');
  }

  menuClickHandler = () => {
    this.htmlRef.classList.toggle('nav-open');

    this.setState({
      navClass: this.state.isOpen ? '' : 'mobile-navigation--open',
      isOpen: !this.state.isOpen
    })
  };

  closeMenu = () => {
    this.htmlRef.classList.remove('nav-open');

    this.setState({
      navClass: '',
      isOpen: false
    })
  };

  render() {
    return (
      <header className="header container">
        <Link to={'/'}><img src={Logo} className="logo" alt="app logo"/></Link>

        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list__item"><Link to={'/'}>Home</Link></li>
            <li className="navigation-list__item"><Link to={'/about'}>About</Link></li>
            <li className="navigation-list__item"><Link to={'/contacts'}>Contact</Link></li>
          </ul>
        </nav>

        <nav className={`mobile-navigation ${this.state.navClass}`}>
          <button type="button" onClick={this.menuClickHandler} className="btn btn--icon">
            <i className="icon icon-burger"></i>
          </button>

          <div className="mobile-navigation__inner">
            <ul className="mobile-navigation__list">
              <li className="mobile-navigation__item"><Link onClick={this.closeMenu} to={'/'}>Home</Link></li>
              <li className="mobile-navigation__item"><Link onClick={this.closeMenu} to={'/about'}>About</Link></li>
              <li className="mobile-navigation__item"><Link onClick={this.closeMenu} to={'/contacts'}>Contact</Link></li>
            </ul>
          </div>
        </nav>


      </header>
    );
  }
}

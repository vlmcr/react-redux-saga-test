import React from 'react';

import Logo from './../../images/logo.png';

const App = () => (
    <div className="wrapper">
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

      <main className="main">
        <div className="posts">
          <div className="post">
            <img className="post__img-preview"/>

            <h5 className="post__title">Strategy & Corporate Finance</h5>

            <p className="post__description">
              Oratio pertinax cu vix, id his aliquam habemus tractatos. Eu vis modo officiis liberavisse, persequeris
              complectitur mei et. Id invidunt adipiscing dapibus has.
            </p>
          </div>

          <div className="post">
            <img className="post__img-preview"/>

            <h5 className="post__title">Strategy & Corporate Finance</h5>

            <p className="post__description">
              Oratio pertinax cu vix, id his aliquam habemus tractatos. Eu vis modo officiis liberavisse, persequeris
              complectitur mei et. Id invidunt adipiscing dapibus has.
            </p>
          </div>

          <div className="post">
            <img className="post__img-preview"/>

            <h5 className="post__title">Strategy & Corporate Finance</h5>

            <p className="post__description">
              Oratio pertinax cu vix, id his aliquam habemus tractatos. Eu vis modo officiis liberavisse, persequeris
              complectitur mei et. Id invidunt adipiscing dapibus has.
            </p>
          </div>

          <div className="post">
            <img className="post__img-preview"/>

            <h5 className="post__title">Strategy & Corporate Finance</h5>

            <p className="post__description">
              Oratio pertinax cu vix, id his aliquam habemus tractatos. Eu vis modo officiis liberavisse, persequeris
              complectitur mei et. Id invidunt adipiscing dapibus has.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <h3 className="footer__text-logo">Logo</h3>

        <nav className="navigation">
          <ul className="navigation-list navigation-list--inverse">
            <li className="navigation-list__item">Home</li>
            <li className="navigation-list__item">About</li>
            <li className="navigation-list__item">Contact</li>
          </ul>
        </nav>
      </footer>
    </div>
);

export default App;

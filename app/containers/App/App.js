import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PostPage from 'containers/PostPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';
import AboutPage from 'components/AboutPage';
import ContactPage from 'components/ContactPage';

const App = () => (
    <div className="wrapper">
      <Header/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route exact path="/contacts" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>

      <Footer/>
    </div>
);

export default App;

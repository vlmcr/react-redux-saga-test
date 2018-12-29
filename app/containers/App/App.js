import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './../../containers/HomePage'

import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
    <div className="wrapper">
      <Header/>

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <Footer/>
    </div>
);

export default App;

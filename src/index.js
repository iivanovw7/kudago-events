import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';
import MainPage from './components/MainPage.js';
import './styles/Styles.sass'
import Store from './store/index'



const mountPoint = document.querySelector('.container');

const store = Store();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={MainPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , mountPoint);


import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Upcoming from './upcoming/index';





export default class MainPage extends Component {



  render() {


    return (


      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>Ближайшие мероприятия</title>
          <link rel="canonical" href="https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
        </Helmet>
        <Upcoming/>
      </div>


    );
  }

}

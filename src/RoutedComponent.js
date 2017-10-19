import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Login from './Login.js'

import Recommendation from './Recommendation.js';
import Bigtable from './Bigtable.js';


class RoutedComponent extends Component {
  

  render() {
    return (
      
      <div id='routed-component'>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/Home' component={Bigtable}/>
          <Route exact path='/Recommendation' component={Recommendation}/>
        </Switch>
      </div>
    )
  }
}
export default RoutedComponent;
import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';


import Recommendation from './Recommendation.js';
import Bigtable from './Bigtable.js';


class RoutedComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      
      <div id='routed-component'>
        <Switch>
          <Route exact path='/' component={Bigtable}/>
          <Route exact path='/Recommendation' component={Recommendation}/>
        </Switch>
      </div>
    )
  }
}
export default RoutedComponent;
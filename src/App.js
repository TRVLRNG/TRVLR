import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import RoutedComponent from './RoutedComponent.js'
import styles from '../style.css'

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <RoutedComponent />
        {/* Footer */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RoutedComponent from './RoutedComponent.js'
import styles from '../style.css'
import TabsExampleIcon from './Navbar.js'

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
        <TabsExampleIcon />
        <RoutedComponent />
    </MuiThemeProvider >
    );
  }
}

export default App;

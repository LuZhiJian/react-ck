import React, { Component } from 'react';
import './App.less';
import Routers from './routes';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Routers />
      </div>
    );
  }
}
export default App;

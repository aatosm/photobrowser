import React, { Component } from 'react';
import GridView from '../containers/GridView';
import Dropdown from '../containers/Dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown />
        <GridView />
      </div>
    );
  }
}

export default App;

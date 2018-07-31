import React, { Component } from 'react';
import Component1 from './components/component1';
import Component2 from './components/component2';
/* STATEFULL - PARENT - NYIMPEN DATA */
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;

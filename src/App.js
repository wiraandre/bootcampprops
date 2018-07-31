import React, { Component } from 'react';
import Component1 from './components/component1';
import Component2 from './components/component2';
/* STATEFULL - PARENT - NYIMPEN DATA */
class App extends Component {
  state = {
    data1: 'bismillah 1',
    data2: 'alhamdulillah 2',
    data3: 'subhanallah 3'
  };
  render() {
    return (
      <div>
        <Component1
          kom1data1={this.state.data1}
          kom1data2={this.state.data2}
          kom1data3={this.state.data3}
        />
        <Component2
          kom2data1={this.state.data1}
          kom2data2={this.state.data2}
          kom2data3={this.state.data3}
        />
      </div>
    );
  }
}

export default App;

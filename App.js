import Ball from './Ball';
import Lottery from './Lottery'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
      </div>
    );
  }
}

export default App;

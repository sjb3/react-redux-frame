import React, { Component } from 'react';
import Profile from './Profile';

class App extends Component {
  state = {
    profiles : [
      { name: 'Lucien', age: 30, rank: 'Principal', id: 1 },
      { name: 'Kyle', age: 28, rank: 'Soloist', id: 2 },
      { name: 'Leta', age: 24, rank: 'Soloist', id: 3 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>PNB Ballet Artists</h1>
        <Profile profiles = {this.state.profiles}/>
      </div>
    );
  }
}

export default App;

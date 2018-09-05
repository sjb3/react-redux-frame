import React, { Component } from 'react';
import Profile from './Profile';
import AddProfile from './AddProfile';

class App extends Component {
  state = {
    profiles : [
      { name: 'Lucien', age: 30, rank: 'Principal', id: 1 },
      { name: 'Kyle', age: 28, rank: 'Soloist', id: 2 },
      { name: 'Leta', age: 24, rank: 'Soloist', id: 3 },
    ]
  }
  addProfile = (profile) => {
    // console.log(profile);
    profile.id = Math.random();
    // if i use push method using setState it's gonna mutate the original array, which is NOT good
    // hence, make a copy of the current array and fiddle with it
    let profiles = [...this.state.profiles, profile]
    this.setState({
      profiles: profiles
    })
  }
  deleteProfile = (id) => {
    // filter certian item(id)
    let profiles = this.state.profiles.filter(profile => {
      return profile.id !== id
    })
    this.setState({
      profiles
    })
  }
  componentDidMount() {
    console.log('component mounted')
  }
  render() {
    return (
      <div className="App">
        <h1>PNB Ballet Artists</h1>
        <Profile deleteProfile={this.deleteProfile} profiles = {this.state.profiles}/>
        <AddProfile addProfile={this.addProfile}/>
      </div>
    );
  }
}

export default App;

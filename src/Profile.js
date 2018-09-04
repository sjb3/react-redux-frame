import React, { Component } from 'react'

class Profile extends Component {
  render () {
    const {profiles} = this.props;
    const profileList = profiles.map(profile => {
      return (
        <div key={profile.id} className='profile'>
          <h2>Name: {profile.name}</h2>
          <h2>Age: {profile.age}</h2>
          <h2>Rank: {profile.rank}</h2>
        </div>
      )
    })
    return (
      <div>
        {profileList}
      </div>

    )
  }
}

export default Profile
// import React, { Component } from 'react'

// class Profile extends Component {
//   render () {
//     const {profiles} = this.props;
//     const profileList = profiles.map(profile => {
//       return (
//         <div key={profile.id} className='profile'>
//           <h2>Name: {profile.name}</h2>
//           <h2>Age: {profile.age}</h2>
//           <h2>Rank: {profile.rank}</h2>
//         </div>
//       )
//     })
//     return (
//       <div>
//         {profileList}
//       </div>

//     )
//   }
// }

// export default Profile

// transform to functional component

import React from 'react'
// not inheriting class any more, delete <this> therefore
// also need to pass props as parameter(s)

// export default (props) => {
//   const {profiles} = props;
// aldo destructure above statement like this
export default({profiles}) => {

  const profileList = profiles.map(profile => {
    return profile.age > 20 ?
      <div key={profile.id} className='profile'>
        <h2>Name: {profile.name}</h2>
        <h2>Age: {profile.age}</h2>
        <h2>Rank: {profile.rank}</h2>
      </div>
      :
      null
  })
  return (
    <div>
      {profileList}
    </div>
  )
}

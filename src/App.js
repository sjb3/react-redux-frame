// import React, { Component } from 'react';
// import Profile from './Profile';
// import AddProfile from './AddProfile';

// class App extends Component {
//   state = {
//     profiles : [
//       { name: 'Lucien', age: 30, rank: 'Principal', id: 1 },
//       { name: 'Kyle', age: 28, rank: 'Soloist', id: 2 },
//       { name: 'Leta', age: 24, rank: 'Soloist', id: 3 },
//     ]
//   }
//   addProfile = (profile) => {
//     // console.log(profile);
//     profile.id = Math.random();
//     // if i use push method using setState it's gonna mutate the original array, which is NOT good
//     // hence, make a copy of the current array and fiddle with it
//     let profiles = [...this.state.profiles, profile]
//     this.setState({
//       profiles: profiles
//     })
//   }
//   deleteProfile = (id) => {
//     // filter certian item(id)
//     let profiles = this.state.profiles.filter(profile => {
//       return profile.id !== id
//     })
//     this.setState({
//       profiles
//     })
//   }
//   componentDidMount() {
//     console.log('component mounted')
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>PNB Ballet Artists</h1>
//         <Profile deleteProfile={this.deleteProfile} profiles = {this.state.profiles}/>
//         <AddProfile addProfile={this.addProfile}/>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react'
import Todos from './Todos';
import AddTodo from './AddForm';

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Hit the gym'},
      {id: 2, content: 'Do grocery shopping'},
    ]
  }
  deleteTodo = (id) => {
    // console.log(id)
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id // its gonna be true or false
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    // console.log(id)
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}


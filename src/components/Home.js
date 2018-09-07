import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const endPoint = 'https://jsonplaceholder.typicode.com/';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get(endPoint +'posts')
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }

  render () {
    const {posts} = this.state;
    const postList = posts.length ?
      (posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })):
      (<div className='center'>Please wait, we're retriving data</div>);
  return (
      <div className='container'>
        <h4 className= 'center'>Home</h4>
        {postList}

      </div>
    )
  }
}

export default Home
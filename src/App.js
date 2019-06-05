import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
        <PostForm />
        </div>
        <br />
        <br />
        <div className='container'>
        <AllPost />
        </div>
      </div>
    );
  }
}

export default App;

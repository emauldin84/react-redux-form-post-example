import React from 'react';
import './App.css';
import  { Provider } from 'react-redux'


import Posts from './components/Posts'
import PostForm from './components/PostForm'

import store from './components/Store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="">
        <PostForm />
        <hr/>
        <Posts />
      </header>
    </div>
  </Provider>
  );
}

export default App;

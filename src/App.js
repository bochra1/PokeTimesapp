import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes exact path='/' component={Home}/>
          <Routes path='/about' component={About} />
          <Routes path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


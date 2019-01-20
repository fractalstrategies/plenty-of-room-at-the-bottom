import React from 'react'

import Header from './components/Header'
import Atom from './components/Atom'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>a simulation of nanotechnology</p>
        <Atom />
      </div>
    )
  }
}

export default App

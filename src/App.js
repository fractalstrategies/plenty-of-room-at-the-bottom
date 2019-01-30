import React from 'react'

import Header from './components/Header'
import Atom from './components/Atom'
import ToDoList from './components/ToDoList'

import './css/App.css'

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        <p>a simulation of nanotechnology</p>
        <Atom />
        <ToDoList />
      </div>
    )
  }
}

export default App

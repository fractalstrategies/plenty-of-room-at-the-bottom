import React from 'react'

import Header from './components/Header'
import Atom from './components/Atom'
import Canvas from './components/Canvas'
import ToDoList from './components/ToDoList'

import './css/App.css'

class App extends React.Component {

  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        <p>a simulation of nanotechnology</p>
        <Atom />
        <Canvas />
        <ToDoList />
      </div>
    )

  }

}

export default App

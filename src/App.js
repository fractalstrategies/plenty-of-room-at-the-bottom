import React from 'react'

import Header from './components/Header'
import Canvas from './three/Canvas'
import Motivations from './components/Motivations'
import ToDoList from './components/ToDoList'

import './css/App.css'

class App extends React.Component {

  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        <Canvas />
        <Motivations />
        <ToDoList />
      </div>
    )

  }

}

export default App

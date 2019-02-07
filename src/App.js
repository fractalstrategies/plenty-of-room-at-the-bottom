import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Canvas from './three/Canvas'
import Motivations from './components/Motivations'
import ToDoList from './components/ToDoList'

import './css/App.css'

class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <div style={{ textAlign: 'center' }}>
                    <Header />
                    <Canvas />
                    <Motivations />
                    <ToDoList />
                </div>
            </Provider>
        )

    }

}

export default App

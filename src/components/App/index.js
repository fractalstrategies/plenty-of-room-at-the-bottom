import React from 'react'
import store from '../../store'
import { Provider } from 'react-redux'

import Header from '../Header'
import Canvas from '../../three/Canvas'
import Motivations from '../Motivations'
import ToDoList from '../ToDoList'

import './style.css'

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

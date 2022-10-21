import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Canvas from './components/three/Canvas'

const todo = (
  <div>
    <p>To Do</p>
    <ol style={{ color: 'white' }}>
      <li>reduce camera rotation scale</li>
      <li>set intro scene</li>
      <li>animate to home screen</li>
      <li>Add back in Sky</li>
      <li>Add back in Text</li>
      <li>remove all old project files/folders</li>
      <li>remove warnings</li>
    </ol>
    <p>Done</p>
    <ul style={{ color: 'white' }}>
      <li>isolate Canvas components</li>
      <li>deploy to GH pages</li>
      <li>remove boilerplate header</li>
      <li>set background color</li>
      <li>remove duplicate canvas</li>
    </ul>
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
    {/* <BrowserRouter basename='/plenty-of-room-at-the-bottom'> */}
      <div style={{ backgroundColor: '#889' }}>
        <Header />
        <Canvas />
        {todo}
      </div>
    </BrowserRouter>
  )
}

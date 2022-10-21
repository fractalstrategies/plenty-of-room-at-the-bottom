import Header from './components/Header'
import Canvas from './components/three/Canvas'

const todo = (
  <div>
    <p>To Do</p>
    <ol style={{ color: 'white' }}>
      <li>isolate Canvas components</li>
      <li>reduce camera rotation scale</li>
      <li>deploy to GH pages</li>
      <li>set intro scene</li>
      <li>animate to home screen</li>
      <li>remove all old project files/folders</li>
      <li>remove warnings</li>
    </ol>
    <p>Done</p>
    <ul style={{ color: 'white' }}>
      <li>remove duplicate canvas</li>
      <li>set background color</li>
      <li>remove boilerplate header</li>
    </ul>
  </div>
)

export default function App() {
  return (
    <div style={{ backgroundColor: '#889' }}>
      <Header />
      <Canvas />
      {todo}
    </div>
  )
}

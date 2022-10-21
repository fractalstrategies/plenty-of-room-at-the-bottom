// import logo from './logo.svg'
import './App.css'

// import Header from './components/Header'
import Canvas from './components/three/Canvas'

const todo = (
  <ol style={{ color: 'white', backgroundColor: 'darkgrey' }}>
    <li>set background color</li>
    <li>remove warnings</li>
    <li>remove boilerplate header</li>
    <li>isolate Canvas components</li>
    <li>reduce camera rotation scale</li>
    <li>deploy to GH pages</li>
    <li>set intro scene</li>
    <li>animate to home screen</li>
  </ol>
)

const done = (
  <ul style={{ color: 'white', backgroundColor: 'darkgrey' }}>
    <li>remove duplicate canvas</li>
  </ul>
)

export default function App() {
  return (
    <div>
      {todo}
      <Canvas />
      {done}
    </div>
    // <div className="App">
    //   <Header />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

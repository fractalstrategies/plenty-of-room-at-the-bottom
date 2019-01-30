import React from 'react'
import * as THREE from 'three'

import Header from './components/Header'
import Atom from './components/Atom'
import ToDoList from './components/ToDoList'

import './css/App.css'

class App extends React.Component {

  componentDidMount() {

    var camera, scene, renderer
    var geometry, material, mesh

    // function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
    camera.position.z = 7

    scene = new THREE.Scene()

    geometry = new THREE.BoxGeometry(0.05, 5, 5)
    material = new THREE.MeshNormalMaterial()
    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    this.refs.canvas.appendChild(renderer.domElement)
    // }

    function animate() {
      requestAnimationFrame( animate )
      // mesh.rotation.x += 0.01
      mesh.rotation.y += 0.02
      renderer.render(scene, camera)
    }
    // init()
    animate()

  }

  render() {

    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        <p>a simulation of nanotechnology</p>
        <Atom />
        <div ref='canvas'></div>
        <ToDoList />
      </div>
    )

  }

}

export default App

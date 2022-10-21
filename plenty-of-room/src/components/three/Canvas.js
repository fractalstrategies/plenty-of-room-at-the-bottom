import React, { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'

import Scale from './Scale'
import AtomicFloor from './AtomicFloor'
import Atom from './Atom'
import Light from './Light'
// import Sky from './Sky'
// import Text from './Text'

import GUI from './GUI'

export default function Canvas(props) {
  const [scale, setScale] = useState(1)
  const [canvas, setCanvas] = useState()
  const container = useRef(null)

  useEffect(() => {

    // renderer
    var renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.current.append(renderer.domElement);

    // camera
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
    camera.position.set(0, 0, 30)
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    // scene
    var scene = new THREE.Scene()

    new AtomicFloor({ scene, position: { x: -12, y: -5, z: 12 }, size: 10 })

    // new Sky({ scene: scene })

    // new Text({ scene: scene, text: 'jello world' })

    // var loader = new THREE.OBJLoader()
    // loader.load('../objects/R2D2_Standing.obj', err => console.log, )
    // var loader = new THREE.JSONLoader()
    // loader.load()

    var atom1 = new Atom({
      scene,
      name: 'hydrogen',
      size: 1,
      position: { x: 0, y: 0, z: 0 },
      protons: 1,
      neutrons: 0,
      electrons: 1,
      spin: 'up',
      orbitalFields: '1p',
    })
    // var atom2 = new Atom({
    //     scene: scene,
    //     name: 'hydrogen',
    //     size: 1,
    //     position: { x: 10, y: 0, z: 0 },
    //     protons: 1,
    //     neutrons: 0,
    //     electrons: 1,
    //     spin: 'up',
    //     orbitalFields: '1p',
    // })

    new Scale({
      scene,
      position: { x: -10, y: 0, z: 0 },
      cubeSize: 3,
    })

    var light1 = new Light({
      scene,
      position: { x: 10, y: 0, z: 25 },
      color: 'rgb(255, 255, 255)',
    })

    GUI(scene, light1.light, camera, { atoms: [atom1] })

    // this.setState(prevState => {
    //   prevState.scene = scene
    // })

    function animate() {
      requestAnimationFrame(animate)
      atom1.animate()
      // atom2.animate()
      renderer.render(scene, camera)
      setTimeout(() => {}, 5000)
    }
    animate()

  }, [container, canvas]);


  const setVibrate = vibrate => {
    this.setState(prevState => {
      prevState.atom1.shouldVibrate = vibrate
      // prevState.atom2.shouldVibrate = vibrate
      return prevState
    })
  }

  return (
    <div style={{ height: window.innerHeight }}>
      <div id='gui-mount' style={{ position: 'absolute', top: '50px', right: '0' }}></div>
      <div id='container' ref={container}></div>
    </div>
  )

}

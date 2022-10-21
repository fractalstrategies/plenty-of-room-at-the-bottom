import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Renderer from './Renderer'
import Camera from './Camera'
import GUI from './GUI'

import Scale from './Scale'
import AtomicFloor from './AtomicFloor'
import Atom from './Atom'
import Light from './Light'
// import Sky from './Sky'
// import Text from './Text'

export default function Canvas(props) {
  const container = useRef(null)

  useEffect(() => {

    const renderer = Renderer(container)
    const camera = Camera()
    var scene = new THREE.Scene()

    new OrbitControls(camera, renderer.domElement)
    // const controls = new OrbitControls(camera, renderer.domElement)
    var light1 = new Light({
      scene,
      position: { x: 10, y: 0, z: 25 },
      color: 'rgb(255, 255, 255)',
    })

    // new Sky({ scene: scene })

    // new Text({ scene: scene, text: 'jello world' })

    // var loader = new THREE.OBJLoader()
    // loader.load('../objects/R2D2_Standing.obj', err => console.log, )
    // var loader = new THREE.JSONLoader()
    // loader.load()

    new AtomicFloor({ scene, position: { x: -12, y: -5, z: 12 }, size: 10 })
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

    // GUI(scene, camera, { atoms: [atom1] })
    GUI(scene, light1.light, camera, { atoms: [atom1] })

    // this.setState(prevState => {
    //   prevState.scene = scene
    // })

    function animate() {
      requestAnimationFrame(animate)
      atom1.animate()
      // atom2.animate()
      renderer.render(scene, camera)
    }
    animate()

  }, [container])

  // const setVibrate = vibrate => {
  //   this.setState(prevState => {
  //     prevState.atom1.shouldVibrate = vibrate
  //     // prevState.atom2.shouldVibrate = vibrate
  //     return prevState
  //   })
  // }

  return (
    <div style={{ height: window.innerHeight }}>
      <div id='gui-mount' style={{ position: 'absolute', top: '50px', right: '0' }}></div>
      <div id='container' ref={container}></div>
    </div>
  )

}

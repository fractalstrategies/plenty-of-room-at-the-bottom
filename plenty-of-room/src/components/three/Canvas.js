import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Renderer from './Renderer'
import Camera from './Camera'
import GUI from './GUI'

import Atom from './Atom'
import AtomicFloor from './AtomicFloor'
import Cube from './Cube'
import Scale from './Scale'
import Light from './Light'
import Text from './Text'
// import Sky from './Sky'

export default function Canvas(props) {
  const container = useRef(null)

  useEffect(() => {

    const renderer = Renderer(container)
    const camera = Camera()
    var scene = new THREE.Scene()

    const orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.enableZoom = false
    // const controls = new OrbitControls(camera, renderer.domElement)
    var light1 = new Light({
      scene,
      position: { x: 13, y: 5, z: 60 },
      color: 'rgb(255, 255, 255)',
    })
    const gridHelper = new THREE.GridHelper(200, 50)
    scene.add(gridHelper)

    const text = new Text({ scene, text: 'jello' })
    // scene.add(text)

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

    const cube1 = new Cube({
      scene: scene,
      size: 5,
      color: 'blue',
      offset: { x: 0, y: 5, z: 40 }
    })

    new Scale({
      scene,
      position: { x: -10, y: 0, z: 0 },
      cubeSize: 3,
    })

    // GUI(scene, camera, { atoms: [atom1] })
    GUI(scene, light1.light, camera, { atoms: [atom1], cube: cube1 })

    // this.setState(prevState => {
    //   prevState.scene = scene
    // })

    function animate() {
      requestAnimationFrame(animate)
      atom1.animate()
      // atom2.animate()
      renderer.render(scene, camera)
      cube1.mesh.rotation.x += 0.01;
      cube1.mesh.rotation.y += 0.01;

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

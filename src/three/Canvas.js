import React from 'react'
import * as THREE from 'three'

import Scale from './Scale'
import AtomicFloor from './AtomicFloor'
import Atom from '../components/Atom'
import Light from './Light'
// import Sky from './Sky'
// import Text from './Text'

import gui from './gui'


class Canvas extends React.Component {

    state = {
        scale: 1, // in nanometers
    }

    componentDidMount() {

        // renderer
        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.refs.canvas.appendChild(renderer.domElement)

        // camera
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
        camera.position.set(0, 0, 50)
        camera.lookAt(new THREE.Vector3(0, 0, 0))

        // scene
        var scene = new THREE.Scene()

        new AtomicFloor({ scene, position: { x: -20, y: -5, z: 20 }, size: 20 })

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
            position: { x: -10, y: 0, z: 0 },
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
            position: { x: -40, y: -10, z: 0 },
            cubeSize: 3,
        })

        var light1 = new Light({
            scene,
            position: { x: 10, y: 0, z: 25 },
            color: 'rgb(255, 255, 255)',
        })

        gui(scene, light1.light, camera, { atoms: [atom1] })

        this.setState(prevState => {
            prevState.scene = scene
        })

        function animate() {
            requestAnimationFrame(animate)
            atom1.animate()
            // atom2.animate()
            renderer.render(scene, camera)
        }
        animate()

    }

    setVibrate = (vibrate) => {
        this.setState(prevState => {
            prevState.atom1.shouldVibrate = vibrate
            // prevState.atom2.shouldVibrate = vibrate
            return prevState
        })
    }

    render() {

        return (
            <div ref='canvas' style={{ height: window.innerHeight }}>
                <div id='gui-mount' style={{ position: 'absolute', top: '50px', right: '0' }}></div>
            </div>
        )

    }

}

export default Canvas

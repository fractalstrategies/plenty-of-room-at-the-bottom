import React from 'react'
import * as THREE from 'three'

import Sky from './Sky'
import Scale from './Scale'
import Atom from '../components/Atom'
// import Text from './Text'
import Light from './Light'

import gui from './gui'


class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        // renderer
        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.refs.canvas.appendChild(renderer.domElement)

        // camera
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
        camera.position.set(5, 5, 50)
        camera.lookAt(new THREE.Vector3(0, 0, 0))

        // scene
        var scene = new THREE.Scene()

        new Sky({ scene: scene })

        // new Text({ scene: scene, text: 'jello world' })

        // var loader = new THREE.OBJLoader()
        // loader.load('../objects/R2D2_Standing.obj', err => console.log, )
        // var loader = new THREE.JSONLoader()
        // loader.load()

        var atom1 = new Atom({
            scene: scene,
            offset: { x: -10, y: 0, z: 0 },
            other: ['hydrogen', 1, 1, 0, 'up', '1p']
        })
        var atom2 = new Atom({
            scene: scene,
            offset: { x: 10, y: 0, z: 0 },
            other: ['hydrogen', 1, 1, 0, 'up', '1p']
        })

        new Scale({
            scene: scene,
            position: { x: -40, y: -10, z: 0 },
            cubeSize: 3,
        })

        var light1 = new Light({})
        light1.addToScene(scene)

        gui(scene, this.setVibrate, light1.light, camera)

        this.setState(prevState => {
            prevState.scene = scene
        })

        function animate() {
            requestAnimationFrame(animate)
            atom1.animate()
            atom2.animate()
            renderer.render(scene, camera)
        }
        animate()

    }

    setVibrate = (vibrate) => {
        this.setState(prevState => {
            prevState.atom1.shouldVibrate = vibrate
            prevState.atom2.shouldVibrate = vibrate
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

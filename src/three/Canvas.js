import React from 'react'
import * as THREE from 'three'

import Scale from './Scale'
import Light from './Light'

import camera from './camera'
import gui from './gui'


class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.refs.canvas.appendChild(renderer.domElement)
        var scene = new THREE.Scene()
        scene.background = new THREE.Color('rgb(255, 255, 255)')

        // var loader = new THREE.JSONLoader()
        // loader.load()

        new Scale({
            scene: scene,
            position: { x: -40, y: -10, z: 0 },
            cubeSize: 3,
        })

        var light1 = new Light({})
        light1.addToScene(scene)

        gui(scene, this.setSceneBackgroundColor, this.setVibrate, light1.light, camera)

        this.setState(prevState => {
            prevState.scene = scene
        })

        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()

    }

    setSceneBackgroundColor = (color) => {
        this.setState(prevState => prevState.scene.background = new THREE.Color(color))
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
            <div ref='canvas'>
                <div id='gui-mount' style={{ position: 'absolute', top: '50px', right: '0' }}></div>
            </div>
        )

    }

}

export default Canvas

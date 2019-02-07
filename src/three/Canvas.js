import React from 'react'
import * as THREE from 'three'

import Atom from '../components/Atom'
import Cube from './Cube'
import Light from './Light'

import renderer from './renderer'
import camera from './camera'
import gui from './gui'
import planeGrid from './planeGrid'
import lines from './lines'


class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)
        var scene = new THREE.Scene()

        var atom1 = new Atom({ offset: { x: -10, y: 0, z: 0 }, other: ['hydrogen', 1, 1, 0, 'up', '1p']})
        var atom2 = new Atom({ offset: { x: 10, y: 0, z: 0 }, other: ['hydrogen', 1, 1, 0, 'up', '1p']})
        atom1.addToScene(scene)
        atom2.addToScene(scene)

        var cube1 = new Cube({ offset: { x: -40, y: 15, z: 0 } })
        cube1.addToScene(scene)

        scene.add(planeGrid)
        scene.add(lines)

        var light1 = new Light({})
        light1.addToScene(scene)

        gui(atom1.mesh, atom2.mesh, light1.light, camera)

        function animate() {
            requestAnimationFrame(animate)
            atom1.animate()
            atom2.animate()
            renderer.render(scene, camera)
        }
        animate()

    }

    render() {

        return (
            <div ref='canvas'>
            <div id='gui-mount' style={{ position: 'absolute', top: '50px', right: '0' }}></div>
            <br />
                Press 'H' to show/hide GUI
            </div>
        )

    }

}

export default Canvas

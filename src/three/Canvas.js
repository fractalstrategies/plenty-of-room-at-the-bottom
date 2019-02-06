import React from 'react'
import * as THREE from 'three'

import Atom from '../components/Atom'

import renderer from './renderer'
import camera from './camera'
import gui from './gui'
import planeGrid from './planeGrid'
import lines from './lines'
import light from './light'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)
        var scene = new THREE.Scene()

        var atom1 = new Atom({ offsetX: -10, other: ['hydrogen', 1, 1, 0, 'up', '1p']})
        var atom2 = new Atom({ offsetX: 10, other: ['hydrogen', 1, 1, 0, 'up', '1p']})
        atom1.addToScene(scene)
        atom2.addToScene(scene)

        scene.add(planeGrid)
        scene.add(lines)
        scene.add(light)
        gui({vibrate: true}, atom1.mesh, atom2.mesh, light, camera)

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
            <br />
                Press 'H' to show/hide GUI
            </div>
        )

    }

}

export default Canvas

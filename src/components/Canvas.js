import React from 'react'
import * as THREE from 'three'

import Atom from '../components/Atom'

import renderer from '../three/renderer'
import camera from '../three/camera'
import gui from '../three/gui'
import planeGrid from '../three/planeGrid'
import lines from '../three/lines'
import light from '../three/light'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)
        var scene = new THREE.Scene()

        var atom1 = new Atom(-10, ['hydrogen', 1, 1, 0, 'up', '1p'])
        var atom2 = new Atom(10, ['hydrogen', 1, 1, 0, 'up', '1p'])
        atom1.addToScene(scene)
        atom2.addToScene(scene)

        scene.add(planeGrid)
        scene.add(lines)
        scene.add(light)
        gui(camera, light, atom1.mesh, atom2.mesh)

        function animate() {
            requestAnimationFrame(animate)
            atom1.spinAtom('up')
            atom2.spinAtom('up')
            renderer.render(scene, camera)
        }
        animate()

    }

    render() {

        return (
            <div ref='canvas'></div>
        )

    }

}

export default Canvas

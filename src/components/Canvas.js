import React from 'react'
import * as THREE from 'three'

import renderer from '../three/renderer'
import camera from '../three/camera'
import gui from '../three/gui'
import planeGrid from '../three/planeGrid'
import lines from '../three/lines'
import icosahedron from '../three/icosahedron'
import light from '../three/light'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)
        var scene = new THREE.Scene()

        const icosahedron1 = icosahedron(scene, -10)
        const icosahedron2 = icosahedron(scene, 10)
        scene.add(planeGrid)
        scene.add(lines)
        scene.add(light)
        gui(camera, light, icosahedron1, icosahedron2)

        function animate() {
            requestAnimationFrame(animate)
            icosahedron1.rotation.x += 0.02
            icosahedron1.rotation.y += 0.04
            icosahedron2.rotation.x += 0.02
            icosahedron2.rotation.y += 0.04
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

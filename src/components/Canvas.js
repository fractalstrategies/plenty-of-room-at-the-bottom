import React from 'react'
import * as THREE from 'three'

import renderer from '../three/renderer'
import camera from '../three/camera'
import gui from '../three/gui'
import planeGrid from '../three/planeGrid'
import cube from '../three/cube'
import lines from '../three/lines'
import icosahedron from '../three/icosahedron'
import light from '../three/light'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)

        var scene = new THREE.Scene()
        scene.add(planeGrid)
        scene.add(cube)
        scene.add(lines)
        scene.add(icosahedron)
        scene.add(light)
        gui(camera, light, cube)

        function animate() {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.02
            cube.rotation.y += 0.04
            icosahedron.rotation.x += 0.02
            icosahedron.rotation.y += 0.04
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

import React from 'react'
import * as THREE from 'three'

import box from '../meshes/box'
import lines from '../meshes/lines'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        var renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.refs.canvas.appendChild(renderer.domElement)

        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
        camera.position.set(0, 0, 100)
        camera.lookAt(0, 0, 0)

        var scene = new THREE.Scene()
        scene.add(box)
        scene.add(lines)

        function animate() {
            requestAnimationFrame(animate)
            // box.rotation.x += 0.01
            box.rotation.y += 0.02
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

import React from 'react'
import * as THREE from 'three'

import renderer from '../three/renderer'
import camera from '../three/camera'
import box from '../three/box'
import lines from '../three/lines'
import light from '../three/light'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)
        
        var scene = new THREE.Scene()
        scene.add(box)
        scene.add(lines)
        scene.add(light)

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

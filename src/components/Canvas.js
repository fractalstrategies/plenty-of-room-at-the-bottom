import React from 'react'
import * as THREE from 'three'
import * as dat from 'dat.gui'

import renderer from '../three/renderer'
import camera from '../three/camera'
import planeGrid from '../three/planeGrid'
import box from '../three/box'
import lines from '../three/lines'
import icosahedron from '../three/icosahedron'
import light from '../three/light'

class Canvas extends React.Component {

    state = {}

    componentDidMount() {

        this.refs.canvas.appendChild(renderer.domElement)

        var scene = new THREE.Scene()
        scene.add(planeGrid)
        scene.add(box)
        scene.add(lines)
        scene.add(icosahedron)
        scene.add(light)

        const gui = new dat.GUI()
        var cameraGui = gui.addFolder("camera position")
        cameraGui.add(camera.position, 'x')
        cameraGui.add(camera.position, 'y')
        cameraGui.add(camera.position, 'z')
        cameraGui.open()
        
        var cameraGui2 = gui.addFolder("camera projection")
        cameraGui2.add(camera, "fov")
        cameraGui2.open()
        
        var lightGui = gui.addFolder("light position")
        lightGui.add(light.position, 'x')
        lightGui.add(light.position, 'y')
        lightGui.add(light.position, 'z')
        lightGui.open()
        
        var cubeGui = gui.addFolder("cube position")
        cubeGui.add(box.position, 'x')
        cubeGui.add(box.position, 'y')
        cubeGui.add(box.position, 'z')
        cubeGui.open()

        function animate() {
            requestAnimationFrame(animate)
            box.rotation.x += 0.02
            box.rotation.y += 0.04
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

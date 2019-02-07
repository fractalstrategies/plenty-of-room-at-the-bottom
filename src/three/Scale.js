import * as THREE from 'three'
import Cube from './Cube'

class Scale {

    constructor(scaleDeets) {

        var { scaleStart, cubeSize } = scaleDeets

        this.geometry = new THREE.Geometry()
        this.geometry.vertices.push(new THREE.Vector3(scaleStart.x, scaleStart.y, scaleStart.z + 10))
        this.geometry.vertices.push(new THREE.Vector3(scaleStart.x + cubeSize, scaleStart.y, scaleStart.z + 10))

        this.material = new THREE.LineBasicMaterial({ color: 0x0000ff })

        this.mesh = new THREE.Line(this.geometry, this.material)

        this.cube1 = new Cube({ size: cubeSize, offset: { x: scaleStart.x + cubeSize / 2, y: scaleStart.y, z: scaleStart.z } })

    }

    addToScene(scene) {
        scene.add(this.mesh)
        this.cube1.addToScene(scene)
    }

}


export default Scale

import * as THREE from 'three'
import Cube from './Cube'

class Scale {

    constructor(scaleDeets) {

        this.geometry = new THREE.Geometry()
        this.geometry.vertices.push(new THREE.Vector3( -40, 10, 0) )
        this.geometry.vertices.push(new THREE.Vector3( -30, 10, 0) )

        this.material = new THREE.LineBasicMaterial({ color: 0x0000ff })

        this.mesh = new THREE.Line(this.geometry, this.material)

        this.cube1 = new Cube({ size: 10, offset: { x: -40, y: 15, z: 0 } })

    }

    addToScene(scene) {
        scene.add(this.mesh)
        this.cube1.addToScene(scene)
    }

}


export default Scale

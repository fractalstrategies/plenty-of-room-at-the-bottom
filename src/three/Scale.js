import * as THREE from 'three'
import Line from './Line'
import Cube from './Cube'

class Scale {

    constructor(scaleDeets) {

        const { scene, scaleStart, cubeSize } = scaleDeets

        new Line({
            scene: scene,
            pointA: { x: 0, y: 0, z: 0 },
            pointB: { x: 10, y: 10, z: 10 },
            color: 'rgb(100, 200, 200)',
        })

        this.geometry = new THREE.Geometry()
        this.geometry.vertices.push(new THREE.Vector3(scaleStart.x, scaleStart.y, scaleStart.z + 10))
        this.geometry.vertices.push(new THREE.Vector3(scaleStart.x + cubeSize, scaleStart.y, scaleStart.z + 10))

        this.material = new THREE.LineBasicMaterial({ color: 0x0000ff })

        this.mesh = new THREE.Line(this.geometry, this.material)
        scene.add(this.mesh)
        
        new Cube({
            scene: scene,
            size: cubeSize,
            offset: {
                x: scaleStart.x + cubeSize / 2,
                y: scaleStart.y,
                z: scaleStart.z
            },
            wireframe: true,
        })
        
    }

}


export default Scale

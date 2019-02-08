import * as THREE from 'three'

class Line {

    constructor(lineDeets) {

        var { scene, pointA, pointB, color } = lineDeets

        this.geometry = new THREE.Geometry()
        this.geometry.vertices.push(new THREE.Vector3(pointA.x, pointA.y, pointA.z))
        this.geometry.vertices.push(new THREE.Vector3(pointB.x, pointB.y, pointB.z))

        this.material = new THREE.LineBasicMaterial({ color: color })

        this.mesh = new THREE.Line(this.geometry, this.material)

        scene.add(this.mesh)

    }

}

export default Line
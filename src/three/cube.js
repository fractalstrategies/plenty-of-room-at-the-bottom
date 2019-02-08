import * as THREE from 'three'

class Cube {

    constructor(cubeDeets) {

        const { scene, size, offset, wireframe } = cubeDeets

        this.geometry = new THREE.BoxGeometry(size, size, size)

        if (wireframe) {
            this.wireframe = new THREE.WireframeGeometry(this.geometry)
            this.mesh = new THREE.LineSegments(this.wireframe)
            this.mesh.material.depthTest = false
            this.mesh.material.opacity = 1
            this.mesh.material.transparent = false
        } else {
            this.material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 })
            // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
            // this.material = new THREE.MeshNormalMaterial()
            this.mesh = new THREE.Mesh(this.geometry, this.material)
        }

        this.mesh.position.x += offset.x
        this.mesh.position.y += offset.y
        this.mesh.position.z += offset.z

        scene.add(this.mesh)

    }

}

export default Cube

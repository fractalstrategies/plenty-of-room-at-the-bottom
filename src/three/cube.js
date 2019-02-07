import * as THREE from 'three'

class Cube {
    
    constructor(cubeDeets) {

        this.geometry = new THREE.BoxGeometry(cubeDeets.size, cubeDeets.size, cubeDeets.size)
        this.material = new THREE.MeshLambertMaterial( { color: 0xfd59d7 } )
        // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
        // this.material = new THREE.MeshNormalMaterial()
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.x += cubeDeets.offset.x
        this.mesh.position.y += cubeDeets.offset.y
        this.mesh.position.z += cubeDeets.offset.z

    }

    addToScene(scene) {
        scene.add(this.mesh)
    }

}

export default Cube

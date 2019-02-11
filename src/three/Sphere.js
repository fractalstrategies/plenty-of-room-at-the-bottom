import * as THREE from 'three'

class Sphere {

    constructor(sphereDetails) {

        const { scene, offset, size} = sphereDetails

        this.geometry = new THREE.SphereGeometry(size, 32, 32)
        
        this.loader = new THREE.TextureLoader()
        this.texture = this.loader.load('https://i.imgur.com/VqIRECw.png', t => t)
        this.material = new THREE.MeshBasicMaterial({ map: this.texture })

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.x = offset.x
        this.mesh.position.y = offset.y
        this.mesh.position.z = offset.z

        scene.add(this.mesh)
    }

}

export default Sphere

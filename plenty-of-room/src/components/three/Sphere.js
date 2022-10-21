import * as THREE from 'three'

class Sphere {

    constructor(sphereDetails) {

        const { scene, position, size, } = sphereDetails
        // const { scene, position, size, color } = sphereDetails

        this.geometry = new THREE.SphereGeometry(size, 32, 32)
        
        // this.material = new THREE.MeshLambertMaterial({ color })
        this.loader = new THREE.TextureLoader()
        // this.texture = this.loader.load('https://i.imgur.com/VqIRECw.png', t => t)
        this.texture = this.loader.load('https://i.imgur.com/JJvIrFw.png', t => t)
        this.material = new THREE.MeshBasicMaterial({ map: this.texture })

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.x = position.x
        this.mesh.position.y = position.y
        this.mesh.position.z = position.z

        scene.add(this.mesh)
    }

}

export default Sphere

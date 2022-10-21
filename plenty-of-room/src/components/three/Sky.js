import * as THREE from 'three'

class Sky {

    constructor(textDeets) {

        const { scene } = textDeets

        this.geometry = new THREE.SphereGeometry(1000, 25, 25)

        this.loader = new THREE.TextureLoader()
        this.texture = this.loader.load('https://i.imgur.com/Rcikfdu.jpg')

        this.material = new THREE.MeshPhongMaterial({ map: this.texture })
        this.material.side = THREE.BackSide

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.material.side = THREE.BackSide

        scene.add(this.mesh)

    }

}

export default Sky

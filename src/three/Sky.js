import * as THREE from 'three'

class Sky {

    constructor(textDeets) {

        const { scene } = textDeets

        this.geometry = new THREE.SphereGeometry(100000, 25, 25)

        this.loader = new THREE.TextureLoader()
        this.texture = this.loader.load('https://i.imgur.com/Rcikfdu.jpg')

        this.material = new THREE.MeshPhongMaterial({ map: this.texture })

        this.mesh = new THREE.Mesh(this.geometry, this.materials)

        scene.add(this.mesh)

    }

}

export default Sky

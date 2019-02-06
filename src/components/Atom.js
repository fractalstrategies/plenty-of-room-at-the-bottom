import * as THREE from 'three'

class Atom {

    constructor(offsetX, atomDeets) {

        this.loader = new THREE.TextureLoader()
        this.texture = this.loader.load('https://i.imgur.com/VqIRECw.png', t => t)
        this.geometry = new THREE.IcosahedronGeometry(5, 0)
        this.material = new THREE.MeshBasicMaterial({ map: this.texture })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.x = offsetX

        this.name = atomDeets[0]
        this.protons = atomDeets[1]
        this.neutrons = atomDeets[2]
        this.electrons = atomDeets[3]
        this.orbitalFields = atomDeets[4]

    }

    addToScene(scene) {
        scene.add(this.mesh)
        console.log('jello world')
    }

    spinAtom(direction) {
        // console.log('jello ' + direction)
        if (direction === 'up') {
            this.mesh.rotation.x += 0.02
            this.mesh.rotation.y += 0.04
        }
    }

}

export default Atom

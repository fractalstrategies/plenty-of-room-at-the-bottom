import * as THREE from 'three'

class Atom {

    constructor(atomDeets) {

        this.loader = new THREE.TextureLoader()
        this.texture = this.loader.load('https://i.imgur.com/VqIRECw.png', t => t)
        this.geometry = new THREE.SphereGeometry(4, 32, 32)
        this.material = new THREE.MeshBasicMaterial({ map: this.texture })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.x = atomDeets.offsetX

        this.name = atomDeets.other[0]
        this.protons = atomDeets.other[1]
        this.neutrons = atomDeets.other[2]
        this.electrons = atomDeets.other[3]
        this.spin = atomDeets.other[4]
        this.orbitalFields = atomDeets.other[5]

        this.tick = 0

    }

    addToScene(scene) {
        scene.add(this.mesh)
    }

    spinAtom() {
        if (this.spin === 'up') {
            this.mesh.rotation.x += 0.16
            this.mesh.rotation.y += 0.32
        }
    }

    vibrate() {
        let step = 0.1
        this.mesh.position.x += [step, -step, -step, step][this.tick]
        this.mesh.position.x += [step, -step, -step, step][this.tick]
    }

    animate() {
        this.spinAtom()
        this.vibrate()
        if (this.tick >= 3) this.tick = 0
        else this.tick++
    }

}

export default Atom

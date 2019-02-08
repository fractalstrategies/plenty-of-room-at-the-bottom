import * as THREE from 'three'

class Atom {

    constructor(atomDeets) {

        const { scene, offset, other } = atomDeets

        this.loader = new THREE.TextureLoader()
        this.texture = this.loader.load('https://i.imgur.com/VqIRECw.png', t => t)
        this.geometry = new THREE.SphereGeometry(4, 32, 32)
        this.material = new THREE.MeshBasicMaterial({ map: this.texture })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.x = offset.x
        this.mesh.position.y = offset.y
        this.mesh.position.z = offset.z

        scene.add(this.mesh)

        this.name = other[0]
        this.protons = other[1]
        this.neutrons = other[2]
        this.electrons = other[3]
        this.spin = other[4]
        this.orbitalFields = other[5]
        this.shouldVibrate = true

        this.tick = 0

    }

    spinAtom() {
        if (this.spin === 'up') {
            this.mesh.rotation.x += 0.16
            this.mesh.rotation.y += 0.32
        }
    }

    vibrate() {
        let step = 0.08
        this.mesh.position.x += [step, -step, -step, step][this.tick]
        this.mesh.position.x += [step, -step, -step, step][this.tick]
    }

    animate() {
        this.spinAtom()
        if (this.shouldVibrate) this.vibrate()
        if (this.tick >= 3) this.tick = 0
        else this.tick++
    }

}

export default Atom

import Sphere from '../three/Sphere'

class Atom {

    constructor(atomDetails) {

        const { scene, name, size, offset, protons, neutrons, electrons, spin, orbitalFields } = atomDetails

        this.name = name
        this.protons = protons
        this.neutrons = neutrons
        this.electrons = electrons
        this.spin = spin
        this.orbitalFields = orbitalFields
        this.shouldVibrate = true

        this.proton1 = new Sphere({scene, offset, size})

        this.tick = 0

    }

    spinAtom() {
        if (this.spin === 'up') {
            this.proton1.mesh.rotation.x += 0.16
            this.proton1.mesh.rotation.y += 0.32
        }
    }

    vibrate() {
        let step = 0.08
        this.proton1.mesh.position.x += [step, -step, -step, step][this.tick]
        this.proton1.mesh.position.y += [step, -step, -step, step][this.tick]
    }

    animate() {
        this.spinAtom()
        if (this.shouldVibrate) this.vibrate()
        if (this.tick >= 3) this.tick = 0
        else this.tick++
    }

}

export default Atom

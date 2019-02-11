import Sphere from '../three/Sphere'
import Light from '../three/Light'

class Atom {

    constructor(atomDetails) {

        const { scene, name, size, position, protons, neutrons, electrons, spin, orbitalFields } = atomDetails

        this.name = name
        this.protonCount = protons
        this.protons = []
        this.neutrons = neutrons
        this.electronCount = electrons
        this.electrons = []
        this.spin = spin
        this.orbitalFields = orbitalFields
        this.shouldVibrate = false

        for (let i = 0; i < this.electronCount; i++) {
            var color = 'rgb(255, 255, 255)'
            this.electrons.push(new Light({scene, position, color}))
        }

        for (let i = 0; i < this.protonCount; i++) {
            this.protons.push(new Sphere({scene, position, size}))
        }

        this.tick = 0

    }

    spinAtom() {
        if (this.spin === 'up') {
            for (let i = 0; i < this.protonCount; i++) {
                this.protons[i].mesh.rotation.x += 0.16
                this.protons[i].mesh.rotation.y += 0.32
            }
        }
    }

    vibrate() {
        if (this.shouldVibrate) {
            let step = 0.08
            for (let i = 0; i < this.protonCount; i++) {
                this.protons[i].mesh.position.x += [step, -step, -step, step][this.tick]
                this.protons[i].mesh.position.y += [step, -step, -step, step][this.tick]
            }
        }
    }

    animate() {
        this.spinAtom()
        this.vibrate()
        if (this.tick >= 3) this.tick = 0
        else this.tick++
    }

}

export default Atom

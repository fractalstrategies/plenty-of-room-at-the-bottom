import Sphere from './Sphere'

class AtomicFloor {

    constructor(AtomicFloorDetails) {

        const { scene, position, size } = AtomicFloorDetails

        for (var i=0; i<size; i++) {
            for (var j=0; j<size; j++) {
                new Sphere({
                    scene,
                    position: {
                        x: position.x + (i * 3),
                        y: position.y,
                        z: position.z - (j * 3),
                    },
                    size: 1,
                })
            }
        }
        // const tile1 = new Sphere({ scene, position, tileSize })

        // scene.add(this.floor)

    }

}

export default AtomicFloor

import * as THREE from 'three'

class Light {

    constructor(lightDetails) {

        const { scene, position, color } = lightDetails

        this.light = new THREE.PointLight(color)
        this.light.position.set(position.x, position.y, position.z)

        scene.add(this.light)

    }

}


export default Light

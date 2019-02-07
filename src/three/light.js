import * as THREE from 'three'

class Light {

    constructor(lightDeets) {
        this.light = new THREE.PointLight(0xFFFF00)
        this.light.position.set(10, 0, 25)
    }

    addToScene(scene) {
        scene.add(this.light)
    }

}


export default Light

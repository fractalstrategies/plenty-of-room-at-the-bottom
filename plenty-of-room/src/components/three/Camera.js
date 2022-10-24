import * as THREE from 'three'

export default function Renderer() {
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
    camera.position.set(0, 5, 50)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    return camera
}

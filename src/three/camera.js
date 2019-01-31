import * as THREE from 'three'

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 50)
camera.lookAt(0, 0, 0)

export default camera

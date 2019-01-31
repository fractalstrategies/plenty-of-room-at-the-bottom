import * as THREE from 'three'

var geometry = new THREE.BoxGeometry(0.05, 5, 5)
var material = new THREE.MeshNormalMaterial()
var mesh = new THREE.Mesh(geometry, material)

export default mesh

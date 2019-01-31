import * as THREE from 'three'

var geometry = new THREE.BoxGeometry(7, 7, 7)
var material = new THREE.MeshNormalMaterial()
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
var mesh = new THREE.Mesh(geometry, material)

mesh.position.x = -10

export default mesh

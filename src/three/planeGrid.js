import * as THREE from 'three'

var geometry = new THREE.Geometry()
geometry.vertices.push(new THREE.Vector3( -10, 0, 0) )
geometry.vertices.push(new THREE.Vector3( 0, 10, 0) )
geometry.vertices.push(new THREE.Vector3( 10, 0, 0) )

var material = new THREE.LineBasicMaterial({ color: 0x0000ff })

var mesh = new THREE.Line(geometry, material)

export default mesh

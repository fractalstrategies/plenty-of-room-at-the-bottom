import * as THREE from 'three'

function genIcosahedron(offsetX) {
    // var material = new THREE.MeshNormalMaterial()
    var geometry = new THREE.IcosahedronGeometry(5, 0)
    var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } )
    // var material = new THREE.MeshLambertMaterial( { color: 0x00ff00, wireframe: true } )
    var mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = offsetX
    return mesh
}


export default genIcosahedron

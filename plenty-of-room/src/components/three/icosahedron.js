import * as THREE from 'three'

function genIcosahedron(scene, offsetX) {
    var loader = new THREE.TextureLoader()
    var texture = loader.load('https://i.imgur.com/VqIRECw.png', t => t)
    var geometry = new THREE.IcosahedronGeometry(5, 0)
    var material = new THREE.MeshBasicMaterial({ map: texture })
    // var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } )
    // var material = new THREE.MeshNormalMaterial()
    // var material = new THREE.MeshLambertMaterial( { color: 0x00ff00, wireframe: true } )
    var mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = offsetX
    scene.add(mesh)
    return mesh
}


export default genIcosahedron

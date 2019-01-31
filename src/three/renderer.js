import * as THREE from 'three'

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)

export default renderer

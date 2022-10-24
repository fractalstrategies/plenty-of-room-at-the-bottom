import * as THREE from 'three'

export default function Renderer(container) {
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.current.append(renderer.domElement)
  return renderer
}

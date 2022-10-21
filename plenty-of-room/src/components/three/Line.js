import * as THREE from 'three'

class Line {

  constructor(lineDeets) {

    var { scene } = lineDeets
    // var { scene, pointA, pointB, color } = lineDeets

    // create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

    const points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line( geometry, material );

    // old
    // this.geometry = new THREE.BoxGeometry()
    // this.geometry.vertices.push(new THREE.Vector3(pointA.x, pointA.y, pointA.z))
    // this.geometry.vertices.push(new THREE.Vector3(pointB.x, pointB.y, pointB.z))
    // this.material = new THREE.LineBasicMaterial({ color: color })
    // this.mesh = new THREE.Line(this.geometry, this.material)

    scene.add(line)

  }

}

export default Line

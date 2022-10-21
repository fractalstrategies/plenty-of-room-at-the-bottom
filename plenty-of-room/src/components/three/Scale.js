import Line from './Line'
import Cube from './Cube'

class Scale {

    constructor(scaleDeets) {

        const { scene, position, cubeSize } = scaleDeets
        const half = cubeSize / 2

        const makeLine = (face, axis, front) => {
            var pointA = { x: position.x, y: position.y, z: position.z }
            var pointB = { x: position.x, y: position.y, z: position.z }
            if (front) {
                pointA[face] += cubeSize
                pointB[face] += cubeSize
            } else {
                pointA[face] -= cubeSize
                pointB[face] -= cubeSize
            }
            pointA[axis] -= half
            pointB[axis] += half
            new Line({
                scene: scene,
                pointA: pointA,
                pointB: pointB,
                color: 'rgb(50, 150, 255)',
            })
        }

        // top
        makeLine('y', 'x', true)
        makeLine('y', 'z', true)
        // bottom
        makeLine('y', 'x', false)
        makeLine('y', 'z', false)
        // front
        makeLine('z', 'x', true)
        makeLine('z', 'y', true)
        // back
        makeLine('z', 'x', false)
        makeLine('z', 'y', false)
        // right
        makeLine('x', 'z', true)
        makeLine('x', 'y', true)
        // left
        makeLine('x', 'z', false)
        makeLine('x', 'y', false)
        
        new Cube({
            scene: scene,
            size: cubeSize,
            offset: {
                x: position.x,
                y: position.y,
                z: position.z
            },
        })
        
    }

}


export default Scale

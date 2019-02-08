import Line from './Line'
import Cube from './Cube'

class Scale {

    constructor(scaleDeets) {

        const { scene, position, cubeSize } = scaleDeets

        new Line({
            scene: scene,
            pointA: { x: position.x, y: position.y, z: position.z + 10 },
            pointB: { x: position.x + cubeSize, y: position.y, z: position.z + 10 },
            color: 'rgb(50, 150, 255)',
        })
        
        new Cube({
            scene: scene,
            size: cubeSize,
            offset: {
                x: position.x,
                y: position.y,
                z: position.z
            },
            wireframe: true,
        })
        
    }

}


export default Scale

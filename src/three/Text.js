import * as THREE from 'three'

class Text {

    constructor(textDeets) {

        const { scene, text } = textDeets

        this.loader = new THREE.FontLoader()
        
        this.loader.load('../css/Font_Ghost_Factory_Regular.json', response => {
            this.font = response
        })

        this.geometry = new THREE.TextGeometry(text, {
            font: this.font,
            size: 20,
            curveSegments: 4,
            bevelThickness: 2,
            bevelSize: 1.5,
            bevelEnabled: true,
        })
        this.geometry.computeBoundingBox()
        this.geometry.computeVertexNormals()
        this.geometry = new THREE.BufferGeometry().fromGeometry(this.geometry)

        this.materials = [
            new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
            new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
        ]

        this.mesh = new THREE.Mesh(this.geometry, this.materials)

        scene.add(this.mesh)

    }

}

export default Text

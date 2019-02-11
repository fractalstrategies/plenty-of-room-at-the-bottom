import * as dat from 'dat.gui'
import * as THREE from 'three'

const buildGui = (scene, light, camera, models) => {

    const { atoms } = models

    const defaultValues = {
        scalePoint: 'normal',
        scale: 1,
        vibrate: false,
        backgroundColor: 'rgb(255, 255, 255)',
        atomColor: 'rgb(100, 100, 200)',
    }

    const gui = new dat.GUI({
        load: JSON,
        preset: 'Flow',
        autoPlace: false,
    })

    var optionsGui = gui.addFolder('Options')
        optionsGui.add(defaultValues, 'scalePoint', ['normal', 'small', 'mini', 'macro', 'micro', 'nano'])
        var scaleControl = optionsGui.add(defaultValues, 'scale', 0.00000000001, 2)
        var vibrateControl = optionsGui.add(defaultValues, 'vibrate')
        var backgroundColorControl = optionsGui.addColor(defaultValues, 'backgroundColor')
        optionsGui.addColor(defaultValues, 'atomColor')
        scaleControl.onChange(value => {
            scene.scale.set(value, value, value)
        })
        vibrateControl.onChange(value => {
            atoms[0].shouldVibrate = value
            atoms[1].shouldVibrate = value
        })
        backgroundColorControl.onChange(value => {
            scene.background = new THREE.Color(value)
        })
        // optionsGui.open()

    // var atomsGui = gui.addFolder('Atoms')
    //     // atomsGui.open()
    //     var atom1Gui = atomsGui.addFolder('Atom 1 Pos')
    //         atom1Gui.add(atom1.position, 'x', -50, 50)
    //         atom1Gui.add(atom1.position, 'y', -20, 20)
    //         atom1Gui.add(atom1.position, 'z', -400, 40)
    //         atom1Gui.open()
    //     var atom2Gui = atomsGui.addFolder('Atom 2 Pos')
    //         atom2Gui.add(atom2.position, 'x', -50, 50)
    //         atom2Gui.add(atom2.position, 'y', -20, 20)
    //         atom2Gui.add(atom2.position, 'z', -400, 40)
    //         atom2Gui.open()

    var lightGui = gui.addFolder('Light')
    lightGui.add(light.position, 'x')
    lightGui.add(light.position, 'y')
    lightGui.add(light.position, 'z')
    // lightGui.open()

    var cameraGui = gui.addFolder('Camera')
        cameraGui.open()
        var cameraPositionGui = cameraGui.addFolder('Position')
            cameraPositionGui.add(camera.position, 'x')
            cameraPositionGui.add(camera.position, 'y')
            cameraPositionGui.add(camera.position, 'z')
            cameraPositionGui.open()
        var cameraRotationGui = cameraGui.addFolder('Rotation')
            cameraRotationGui.add(camera.rotation, 'x')
            cameraRotationGui.add(camera.rotation, 'y')
            cameraRotationGui.add(camera.rotation, 'z')
            cameraRotationGui.open()

    gui.remember({})

    document.getElementById('gui-mount').appendChild(gui.domElement)

}

export default buildGui

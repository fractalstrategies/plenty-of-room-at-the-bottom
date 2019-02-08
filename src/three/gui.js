import * as dat from 'dat.gui'

const buildGui = (setSceneBackgroundColor, setVibrate, atom1, atom2, light, camera) => {

    const defaultValues = {
        scale: 'nano',
        vibrate: true,
        backgroundColor: 'rgb(255, 255, 255)',
        atomColor: 'rgb(100, 100, 200)',
    }

    const gui = new dat.GUI({
        load: JSON,
        preset: 'Flow',
        autoPlace: false,
    })

    var optionsGui = gui.addFolder('Options')
    optionsGui.add(defaultValues, 'scale', ['normal', 'small', 'mini', 'macro', 'micro', 'nano'])
    var vibrate = optionsGui.add(defaultValues, 'vibrate')
    var backgroundColor = optionsGui.addColor(defaultValues, 'backgroundColor')
    optionsGui.addColor(defaultValues, 'atomColor')
    // optionsGui.open()

    vibrate.onChange(value => {
        setVibrate(value)
    })
    backgroundColor.onChange(value => {
        setSceneBackgroundColor(value)
    })

    var atomsGui = gui.addFolder('Atoms')
    // atomsGui.open()
    
    var atom1Gui = atomsGui.addFolder('Atom 1 Pos')
    atom1Gui.add(atom1.position, 'x', -50, 50)
    atom1Gui.add(atom1.position, 'y', -20, 20)
    atom1Gui.add(atom1.position, 'z', -400, 40)
    atom1Gui.open()
    
    var atom2Gui = atomsGui.addFolder('Atom 2 Pos')
    atom2Gui.add(atom2.position, 'x', -50, 50)
    atom2Gui.add(atom2.position, 'y', -20, 20)
    atom2Gui.add(atom2.position, 'z', -400, 40)
    atom2Gui.open()

    var lightGui = gui.addFolder('Light')
    lightGui.add(light.position, 'x')
    lightGui.add(light.position, 'y')
    lightGui.add(light.position, 'z')
    // lightGui.open()

    var cameraGui = gui.addFolder('Camera')
    cameraGui.add(camera.position, 'x')
    cameraGui.add(camera.position, 'y')
    cameraGui.add(camera.position, 'z')
    cameraGui.open()

    gui.remember({})

    document.getElementById('gui-mount').appendChild(gui.domElement)

}

export default buildGui

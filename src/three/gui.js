import * as dat from 'dat.gui'

const buildGui = (vibrate, icosahedron1, icosahedron2, light, camera) => {

    const gui = new dat.GUI()

    var optionsGui = gui.addFolder('Options')
    optionsGui.add(vibrate, 'vibrate')
    optionsGui.open()
    
    var atom1Gui = gui.addFolder('Atom 1 Pos')
    atom1Gui.add(icosahedron1.position, 'x')
    atom1Gui.add(icosahedron1.position, 'y')
    atom1Gui.add(icosahedron1.position, 'z')
    atom1Gui.open()
    
    var atom2Gui = gui.addFolder('Atom 2 Pos')
    atom2Gui.add(icosahedron2.position, 'x')
    atom2Gui.add(icosahedron2.position, 'y')
    atom2Gui.add(icosahedron2.position, 'z')
    atom2Gui.open()

    var lightGui = gui.addFolder('Light')
    lightGui.add(light.position, 'x')
    lightGui.add(light.position, 'y')
    lightGui.add(light.position, 'z')

    var cameraGui = gui.addFolder('Camera')
    cameraGui.add(camera.position, 'x')
    cameraGui.add(camera.position, 'y')
    cameraGui.add(camera.position, 'z')
    cameraGui.add({fov: 0}, 'fov')

}

export default buildGui

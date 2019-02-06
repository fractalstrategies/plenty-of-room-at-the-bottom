import * as dat from 'dat.gui'

function buildGui(camera, light, icosahedron1, icosahedron2) {
    const gui = new dat.GUI()
    var cameraGui = gui.addFolder("camera position")
    cameraGui.add(camera.position, 'x')
    cameraGui.add(camera.position, 'y')
    cameraGui.add(camera.position, 'z')
    cameraGui.open()
    
    var cameraGui2 = gui.addFolder("camera projection")
    cameraGui2.add(camera, "fov")
    cameraGui2.open()
    
    var atom1Gui = gui.addFolder("atom 1 position")
    atom1Gui.add(icosahedron1.position, 'x')
    atom1Gui.add(icosahedron1.position, 'y')
    atom1Gui.add(icosahedron1.position, 'z')
    atom1Gui.open()
    
    var atom2Gui = gui.addFolder("atom 2 position")
    atom2Gui.add(icosahedron2.position, 'x')
    atom2Gui.add(icosahedron2.position, 'y')
    atom2Gui.add(icosahedron2.position, 'z')
    atom2Gui.open()

    var lightGui = gui.addFolder("light position")
    lightGui.add(light.position, 'x')
    lightGui.add(light.position, 'y')
    lightGui.add(light.position, 'z')
    lightGui.open()
}

export default buildGui

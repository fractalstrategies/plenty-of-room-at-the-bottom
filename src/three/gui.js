import * as dat from 'dat.gui'

function buildGui(camera, light, cube) {
    const gui = new dat.GUI()
    var cameraGui = gui.addFolder("camera position")
    cameraGui.add(camera.position, 'x')
    cameraGui.add(camera.position, 'y')
    cameraGui.add(camera.position, 'z')
    cameraGui.open()
    
    var cameraGui2 = gui.addFolder("camera projection")
    cameraGui2.add(camera, "fov")
    cameraGui2.open()
    
    var lightGui = gui.addFolder("light position")
    lightGui.add(light.position, 'x')
    lightGui.add(light.position, 'y')
    lightGui.add(light.position, 'z')
    lightGui.open()
    
    var cubeGui = gui.addFolder("cube position")
    cubeGui.add(cube.position, 'x')
    cubeGui.add(cube.position, 'y')
    cubeGui.add(cube.position, 'z')
    cubeGui.open()
}

export default buildGui

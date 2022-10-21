import * as dat from 'dat.gui'
import * as THREE from 'three'

export default function GUI(scene, light, camera, models) {

  const { atoms } = models

  const defaultValues = {
    scalePoint: 'normal',
    scale: 1,
    vibrate: false,
    backgroundColor: 'rgb(255, 255, 255)',
    atomColor: 'rgb(100, 100, 200)',
  }

  const guiFS = new dat.GUI({
    load: JSON,
    preset: 'Flow',
    autoPlace: true,
  })

  var optionsGui = guiFS.addFolder('Options')
  optionsGui.add(defaultValues, 'scalePoint', ['normal', 'small', 'mini', 'macro', 'micro', 'nano'])

  var scaleControl = optionsGui.add(defaultValues, 'scale', 0.00000000001, 2)
  optionsGui.addColor(defaultValues, 'atomColor')
  scaleControl.onChange(value => {
    scene.scale.set(value, value, value)
  })

  var vibrateControl = optionsGui.add(defaultValues, 'vibrate')
  vibrateControl.onChange(value => {
    atoms[0].shouldVibrate = value
    atoms[1].shouldVibrate = value
  })

  var backgroundColorControl = optionsGui.addColor(defaultValues, 'backgroundColor')
  backgroundColorControl.onChange(value => {
    scene.background = new THREE.Color(value)
  })
  // optionsGui.open()

  var atomsGui = guiFS.addFolder('Atoms')
  var atomGuis = []
  // atomsGui.open()
  atoms.map((atom, i) => {
    atomGuis[i] = atomsGui.addFolder('Atom ' + i.toString() + ' Position')
    atomGuis[i].add(atom.protons[0].mesh.position, 'x', -50, 50)
    atomGuis[i].add(atom.protons[0].mesh.position, 'y', -20, 20)
    atomGuis[i].add(atom.protons[0].mesh.position, 'z', -400, 40)
    atomGuis[i].open()
    return null
  })

  var lightGui = guiFS.addFolder('Light')
  lightGui.add(light.position, 'x')
  lightGui.add(light.position, 'y')
  lightGui.add(light.position, 'z')
  // lightGui.open()

  var cameraGui = guiFS.addFolder('Camera')
  // cameraGui.open()
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

  // guiFS.remember({})

  document.getElementById('gui-mount').appendChild(guiFS.domElement)

}

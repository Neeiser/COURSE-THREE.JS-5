import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
BONUS: GROUP
 */
const group = new THREE.Group()

group.position.y = 0.2  //sposto tutto il gruppo dei cubi in verticale all'asse delle Y
group.scale.y = 1.2     //Scalare verticalmente tutto il gruppo dei cubi (valore default 1)


scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry (1, 1, 1),
    new THREE.MeshBasicMaterial ({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry (1, 1, 1),
    new THREE.MeshBasicMaterial ({ color: 0x0000ff })
)

cube2.position.x = -2

group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry (1, 1, 1),
    new THREE.MeshBasicMaterial ({ color: 0x00ff00 })
)

cube3.position.x = 2

group.add(cube3)
 


/**
 * Objects
 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// mesh.position.x =   0.7
// mesh.position.y = - 0.6
// mesh.position.z =   1

//Shortcut di quanto scritto sopra:

mesh.position.set(0.7, -0.2, 1)


// SCALE

// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5

//Shortcut di quanto scritto sopra:

mesh.scale.set(2, 0.5, 0.5)


// ROTATION
mesh.rotation.reorder('YXZ') // La prospettiva della rotazione cambia tutta, è relativa a come l'oggetto è impostato al momento.
                             // Quindi riordino tutta la prospettiva della rotazione con .reorder()
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25


*/


// AXES HELPER

const axesHelper = new THREE.AxesHelper() //Se metto un numero come parametro dentro alle parentesi, l'axes diventa più grande.
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
scene.add(camera)

//camera.lookAt(mesh.position) //Guarda alla mesh, in quella posizione creata precedentemente

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
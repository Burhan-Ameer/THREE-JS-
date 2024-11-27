import * as THREE from "three";
const scene=new THREE.Scene()
// let canvas=document.querySelector("canvas")
//  the scene in three js is what we interact with for example if we have a 3D model along with background plus the ligting shadows
// *************************************
//  camera is the perspective or view which you are interacting with this means front face of mine is as i move fuurther this could cause my picture to shrink down
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.set(14,0,20)
// to view something on the browser we have renderer that convert the 3d object into 2 image that is displayed by canvas tag    
const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
// now all the setup is done we need to add an object into the scene
const geometry=new THREE.BoxGeometry(4,4,4) 
const meterial=new THREE.MeshBasicMaterial({
    color:0xffffff,
        wireframe:true
})
// now that we have created a geometry pass that to make a cube in a mesh
const cube=new THREE.Mesh(geometry,meterial)
scene.add(cube)
renderer.render(scene,camera)
function animate(){
        requestAnimationFrame(animate)
        cube.rotation.x+=.01;
        cube.rotation.y+=.01;
        renderer.render(scene,camera)
}
animate()
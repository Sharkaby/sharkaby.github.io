
// Scene
const scene = new THREE.Scene()

//   Renderer
const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector(".bg")
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)


controls = new THREE.OrbitControls(camera, renderer.domElement)
const geo = new THREE.Mesh(
  new THREE.BoxGeometry(5,5,5),
  new THREE.MeshNormalMaterial({
  // flatShading: true,
  // wireframe : true,

  })
)
scene.add(geo)


  /*    equirectangular image    */
{
   const loader = new THREE.TextureLoader();
   const texture = loader.load(
   //    URL
    "https://www.linkpicture.com/q/Eqt.jpeg",
   () => {
   const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
   rt.fromEquirectangularTexture(renderer, texture);
   scene.background = rt.texture;
   });
 }
 //. Don't mind just another url
 /*'https://i.ibb.co/s9L0LVw/Eqt.jpg'*/
   
function animate(){
    requestAnimationFrame(animate)
    
    renderer.render(scene, camera)
  controls.update();
    geo.rotation.y += 0.009
    geo.rotation.z += 0.003   
}
animate()

// Canvas
const canvas = document.querySelector("canvas.webgl");

//scene
const scene = new THREE.Scene();

//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// adding cube to scene
scene.add(mesh);

//size
const sizes = {
  width: 800,
  height: 600,
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //fov(field of view),aspect ratin
camera.position.z = 3;
scene.add(camera);

//renderer (3.js will use webgl to render inside the canvas)
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

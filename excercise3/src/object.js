/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

//position
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;
// mesh.position.set(0.7,-0.6,1) // does the same thing as abouve lines

//scale
mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;
// mesh.scale.set(2,0.5,0.5) // does the same thing as abouve lines

// rotate (with rotation or quaternion)

//with rotation (x,y,z but they are Euler)
// Euler is like a stick from an object
mesh.rotation.reorder("YXZ"); // changing the order , reorder the run of the axes
mesh.rotation.x = 3.14159 * 0.25; //(half rotation is PI ... Math.PI)
mesh.rotation.y = Math.PI * 0.25;

scene.add(mesh);

// mesh.position.normalize(); // make it to default position i.e. 1
console.log(mesh.position.length()); // objects length

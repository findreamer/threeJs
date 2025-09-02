import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const geometry = new THREE.PlaneGeometry(300, 300, 10, 10);
const noise2D = createNoise2D();

const position = geometry.attributes.position;
for (let i = 0; i < position.count; i++) {
  const x = position.getX(i);
  const y = position.getY(i);
  const z = noise2D(x / 100, y / 100) * 50;
  position.setZ(i, z);
}

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

mesh.position.set(0, 0, 0);
mesh.rotateX(Math.PI / 2);

export default mesh;

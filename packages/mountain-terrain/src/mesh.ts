import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100);
const noise2D = createNoise2D();



export function updatePosition() {
  const position = geometry.attributes.position;
  position.needsUpdate = true;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = noise2D(x / 300, y / 300) * 50;
    const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10;
    position.setZ(i, z + sinNum);
  }
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

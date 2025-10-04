import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

const mesh = new THREE.Group();

async function main() {
  const gltf = await loader.loadAsync("./Michelle.glb");
  console.log(gltf);

  gltf.scene.scale.setScalar(150);
  mesh.add(gltf.scene);

  const box = new THREE.Box3();
  box.expandByObject(gltf.scene);

  const v = new THREE.Vector3();
  box.getSize(v);
  console.log(v);

  const xSize = box.max.x - box.min.x;
  const ySize = box.max.y - box.min.y;
  const zSize = box.max.z - box.min.z;

  gltf.scene.position.y = -ySize / 2 + 20;
  gltf.scene.position.z = -zSize / 2;
  console.log(xSize, ySize, zSize);

  const helper1 = new THREE.BoxHelper(gltf.scene);
  mesh.add(helper1);

  const helper2 = new THREE.Box3Helper(box, "red");
  mesh.add(helper2);

  const box2 = new THREE.Box3();
  box2.expandByObject(gltf.scene);
  box2.expandByScalar(100);
  const v2 = new THREE.Vector3();
  box2.getSize(v2);
  console.log(v2);
  const helper3 = new THREE.Box3Helper(box2, "red");
  mesh.add(helper3);
}
main();

export default mesh;

import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "/muxing.jpg",
  (texture) => {
    console.log(texture);
  },
  undefined,
  (err) => {
    console.log(err);
  }
);
texture.colorSpace = THREE.SRGBColorSpace;
// 给题图y方向增加重复
texture.wrapT = THREE.RepeatWrapping;
const geometry = new THREE.SphereGeometry(50);
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.name = "mesh2";
console.log(mesh);
mesh.position.set(0, 100, 0)

export default mesh;

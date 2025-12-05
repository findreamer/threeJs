import * as THREE from "three";

const planeGeometry = new THREE.PlaneGeometry(200, 100);
// 贴图有 UV 坐标
// 自定义 uv坐标
const uvs = new Float32Array([
  0, 0.5, 0.5, 0.5, 0, 0, 0.5,0,
]);

planeGeometry.attributes.uv = new THREE.BufferAttribute(uvs, 2)
const loader = new THREE.TextureLoader();
const texture = loader.load(
  "/test.jpg",
  (texture) => {
    console.log(texture);
  },
  (xhr) => {
    console.log(xhr);
  },
  (err) => {
    console.log(err);
  }
);

texture.colorSpace = THREE.SRGBColorSpace;



const material = new THREE.MeshBasicMaterial({
  map: texture,
  // 双面可见
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(planeGeometry, material);
console.log(mesh);
export default mesh;

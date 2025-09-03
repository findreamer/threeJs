import * as THREE from "three";

const loader = new THREE.TextureLoader();

// 尝试加载纹理，添加错误处理
const texture = loader.load("/diqiu.jpg",
  // 加载成功回调
  () => {
    console.log("纹理加载成功");
  },
  // 加载进度回调
  undefined,
  // 加载错误回调
  (error) => {
    console.error("纹理加载失败:", error);
  }
);

const geometry = new THREE.SphereGeometry(100);
const material = new THREE.MeshBasicMaterial({
//   color: new THREE.Color("orange"),
  map: texture,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(200, 0, 0);

console.log(mesh);
export default mesh;

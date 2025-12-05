import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("foundation.jpg");
texture.colorSpace = THREE.SRGBColorSpace;
// 设置纹理在 U 轴（水平方向）上的重复模式为重复包裹
texture.wrapS = THREE.RepeatWrapping;
// 设置纹理在 V 轴（垂直方向）上的重复模式为重复包裹
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 3;
texture.repeat.y = 0.2;

const geometry = new THREE.BoxGeometry(4000, 300, 3000);
const material = new THREE.MeshLambertMaterial({
  // color: new THREE.Color("gray"),
  map: texture,
  // 开启环境光遮蔽
  aoMap: texture,
});
const foundation = new THREE.Mesh(geometry, material);
export default foundation;

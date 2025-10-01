import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("wall.jpg");
texture.colorSpace = THREE.SRGBColorSpace;
// 设置纹理在 U 轴（水平方向）上的重复模式为重复包裹
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = 2;
const geometry = new THREE.BoxGeometry(4000, 2000, 100);

const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("lightgrey"),
  map: texture,
  // 开启环境光遮蔽
  aoMap: texture,
});

const behindWall = new THREE.Mesh(geometry, material);
console.log(behindWall);

behindWall.translateY(1150);
behindWall.translateZ(-1450);

export default behindWall;

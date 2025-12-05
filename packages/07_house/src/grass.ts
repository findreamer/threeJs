import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("grass.jpg");

texture.colorSpace = THREE.SRGBColorSpace;
// 设置纹理在 U 轴（水平方向）上的重复模式为重复包裹
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(20, 20);

const geometry = new THREE.PlaneGeometry(100000, 100000);

const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("green"),
  map: texture,
  aoMap: texture,
});

const grass = new THREE.Mesh(geometry, material);
grass.rotateX(-Math.PI / 2);
grass.position.y = -150;

export default grass;

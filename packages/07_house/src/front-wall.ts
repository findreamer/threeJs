import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("wall.jpg");
texture.colorSpace = THREE.SRGBColorSpace;
// 设置纹理在 U 轴（水平方向）上的重复模式为重复包裹
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 0.0005;
texture.repeat.y = 0.0005;

const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(4000, 0);
shape.lineTo(4000, 2000);
shape.lineTo(0, 2000);

const door = new THREE.Path();
door.moveTo(1000, 0);
door.lineTo(2000, 0);
door.lineTo(2000, 1500);
door.lineTo(1000, 1500);
shape.holes.push(door);

const windowPath = new THREE.Path();
windowPath.moveTo(2500, 500);
windowPath.lineTo(3500, 500);
windowPath.lineTo(3500, 1500);
windowPath.lineTo(2500, 1500);
shape.holes.push(windowPath);

const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 100,
});

const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("lightgrey"),
  map: texture,
  // 开启环境光遮蔽
  aoMap: texture,
});

const frontWall = new THREE.Mesh(geometry, material);
frontWall.translateX(-2000);
frontWall.translateY(150);
frontWall.translateZ(1400);

export default frontWall;

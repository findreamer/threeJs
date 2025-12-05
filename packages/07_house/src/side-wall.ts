import * as THREE from "three";

// 加载纹理
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
shape.lineTo(0, 2000);
shape.lineTo(-1500, 3000);
shape.lineTo(-3000, 2000);
shape.lineTo(-3000, 0);

// 窗口
const windowPath = new THREE.Path();
windowPath.moveTo(-600, 400);
windowPath.lineTo(-600, 1600);
windowPath.lineTo(-2400, 1600);
windowPath.lineTo(-2400, 400);
shape.holes.push(windowPath);

// 侧墙
const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 100,
});

const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("lightgrey"),
  map: texture,
  // 开启环境光遮蔽
  aoMap: texture,
});

const sideWall = new THREE.Mesh(geometry, material);
const sideWall2 = sideWall.clone();
console.log(sideWall2);

// 绕着Y轴旋转90度
sideWall.rotateY(Math.PI / 2);
sideWall.translateZ(-2000);
sideWall.translateX(1500);
sideWall.translateY(150);

sideWall2.rotateY(Math.PI / 2);
sideWall2.translateZ(1900);
sideWall2.translateX(1500);
sideWall2.translateY(150);

export { sideWall, sideWall2 };

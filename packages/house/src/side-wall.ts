import * as THREE from "three";

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
});

const sideWall = new THREE.Mesh(geometry, material);
const sideWall2 = sideWall.clone();

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

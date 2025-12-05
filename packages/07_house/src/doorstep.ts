import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("foundation.jpg");
texture.colorSpace = THREE.SRGBColorSpace;
// 设置纹理在 U 轴（水平方向）上的重复模式为重复包裹
texture.wrapS = THREE.RepeatWrapping;
// 设置纹理在 V 轴（垂直方向）上的重复模式为重复包裹
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 0.001;
texture.repeat.y = 0.001;

const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(200, 0);
shape.lineTo(200, -100);
shape.lineTo(400, -100);
shape.lineTo(400, -200);
shape.lineTo(600, -200);
shape.lineTo(600, -300);
shape.lineTo(0, -300);

const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 1000,
});
const material = new THREE.MeshLambertMaterial({
  // color: new THREE.Color("grey"),
  map: texture,
  // 开启环境光遮蔽
  aoMap: texture,
});

const doorstep = new THREE.Mesh(geometry, material);
doorstep.rotateY(-Math.PI / 2);
doorstep.position.z = 1500;
doorstep.position.y = 150;

export default doorstep;

import * as THREE from "three";

const geometry = new THREE.BufferGeometry();

const point1 = new THREE.Vector3(0, 0, 0);
const point2 = new THREE.Vector3(300, 0, 0);
const point3 = new THREE.Vector3(0, 300, 0);

// 从点创建三角形
geometry.setFromPoints([point1, point2, point3]);

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
});
const mesh = new THREE.Mesh(geometry, material);
export default mesh;

// 创建一条射线穿过三角形
const ray = new THREE.Ray();
ray.origin.set(50, 50, 100);
ray.direction.set(0, 0, -1);

const arrowHelper = new THREE.ArrowHelper(
  ray.direction,
  ray.origin,
  1000,
  new THREE.Color("pink")
);
mesh.add(arrowHelper);

const point = new THREE.Vector3();

// 计算射线与三角形的交点
ray.intersectTriangle(point1, point2, point3, false, point);
console.log(point);

import "./style.css";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import mesh, { updatePosition } from "./mesh";

// 场景
const scene = new THREE.Scene();

scene.add(mesh);
// 坐标轴
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

// 相机
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1200);
camera.position.set(450, 150, 100);
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

function render() {
  updatePosition();
  // mesh.rotation.z += 0.002;
  mesh.rotateZ(0.002);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.appendChild(renderer.domElement);

// 增加鼠标滚轮缩放

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
  console.log(camera.position);
});

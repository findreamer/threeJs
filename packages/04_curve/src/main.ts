import "./style.css";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import mesh from "./mesh";
import mesh2 from "./mesh2";
import mesh3 from "./mesh3";
import mesh4 from "./mesh4";
import mesh5 from './mesh5';

// 场景
const scene = new THREE.Scene();

// 增加mesh
scene.add(mesh);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);

// 坐标轴
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

// 相机
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 100, 200);
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.appendChild(renderer.domElement);

// 增加鼠标滚轮缩放

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

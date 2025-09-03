import "./style.css";
import * as THREE from "three";
import line from "./mesh";
import plane from "./mesh2";
import sphere from "./mesh3";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 场景
const scene = new THREE.Scene();

scene.add(line);
scene.add(plane);
scene.add(sphere);

// light
const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(100, 100, 100);
scene.add(pointLight);

// 坐标轴
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

// 相机
const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);
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

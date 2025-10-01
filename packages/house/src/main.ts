import "./style.css";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import house from "./house";
// 场景
const scene = new THREE.Scene();

// 加入房子
scene.add(house);

// 平行光
const directionLight = new THREE.DirectionalLight(0xffffff, 1);
directionLight.position.set(3000, 3000, 3000);
scene.add(directionLight);

// 环境光
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

// 坐标轴
const axesHelper = new THREE.AxesHelper(3000);
// 显示出x、y、z轴
axesHelper.setColors("red", "green", "blue");
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

// 相机
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
camera.position.set(3000, 3000, 3000);
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

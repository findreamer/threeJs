import "./style.css";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import house from "./house";
import { gui } from "./roof";
// 场景
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcccccc, 1000, 40000);

const fogControl = gui.addFolder("雾");
fogControl.add(scene.fog, "near").step(100);
fogControl.add(scene.fog, "far").step(1000);

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
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 200000);
camera.position.set(3000, 3000, 3000);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  // 开启对数深度缓冲区
  logarithmicDepthBuffer: true,
});
// 设置一下渲染器天空颜色
renderer.setClearColor(new THREE.Color("skyblue"));
renderer.setSize(width, height);

// 旋转摄像机
let angle = 0;
let r = 5000;
function render() {
  angle += 0.01;

  if (angle >= Math.PI * 2) {
    angle -= Math.PI * 2;

    r = 5000 + Math.random() * 10000;

    camera.position.y = 1000 + Math.random() * 10000;
  }
  // camera.position.set(r * Math.cos(angle), r * Math.sin(angle), r);
  camera.position.x = r * Math.cos(angle);
  camera.position.z = r * Math.sin(angle);
  // 相机看向场景中心
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.appendChild(renderer.domElement);

// 增加鼠标滚轮缩放

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

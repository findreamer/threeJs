import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import mesh from "./mesh.ts";
import mesh2 from "./mesh2.ts";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

const scene = new THREE.Scene();

// scene.add(mesh);
scene.add(mesh2);

const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(300, 200, 400);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
camera.position.set(0, 500, 500);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

// 渲染 composer
const composer = new EffectComposer(renderer);
// 渲染 pass
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
// 轮廓 pass
const v = new THREE.Vector2(window.innerWidth, window.innerWidth);
const outlinePass = new OutlinePass(v, scene, camera);
// 轮廓颜色
outlinePass.visibleEdgeColor.set("orange");

// 轮廓亮度
outlinePass.edgeStrength = 10;
// 轮廓宽度
outlinePass.edgeThickness = 10;
// 轮廓脉冲周期
outlinePass.pulsePeriod = 1;
composer.addPass(outlinePass);

//  bloom pass
const bloomPass = new UnrealBloomPass(v, 1.5, 0.4, 0.85);
bloomPass.threshold = 0.1;
bloomPass.strength = 1.5;
bloomPass.radius = 0.0;

function render() {
  // renderer.render(scene, camera);
  composer.render();
  requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

renderer.domElement.addEventListener("click", (e) => {
  const y = -((e.offsetY / height) * 2 - 1);
  const x = (e.offsetX / width) * 2 - 1;

  const rayCaster = new THREE.Raycaster();
  rayCaster.setFromCamera(new THREE.Vector2(x, y), camera);

  const intersections = rayCaster.intersectObjects(mesh.children);

  if (intersections.length) {
    outlinePass.selectedObjects = [intersections[0].object];
    if (!composer.passes.includes(bloomPass)) {
      composer.addPass(bloomPass);
    }
  } else {
    outlinePass.selectedObjects = [];
    composer.removePass(bloomPass);
  }

  intersections.forEach((item) => {
    // item.object.material.color = new THREE.Color("blue");
  });
});

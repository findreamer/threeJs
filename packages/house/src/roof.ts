import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";

const geometry = new THREE.BoxGeometry(4200, 2000, 100);
const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("red"),
});

const roof = new THREE.Mesh(geometry, material);

const obj = {
  rotateX: 0,
  width: 2000,
};

// Gui 页面调试工具，控制 Roof 旋转角度和宽度
const gui = new GUI();
gui.add(roof.position, "y").min(-10000).max(10000).step(100);
gui.add(roof.position, "z").min(-10000).max(10000).step(100);
gui.addColor(roof.material, "color");
gui
  .add(obj, "rotateX")
  .min(0)
  .max(180)
  .step(0.1)
  .onChange((value) => {
    roof.rotation.x = (value / 180) * Math.PI;
  });
gui
  .add(obj, "width")
  .min(1000)
  .max(5000)
  .step(100)
  .onChange((value) => {
    roof.geometry = new THREE.BoxGeometry(4200, value, 100);
  });

roof.position.y = 2600;
roof.position.z = -800;
roof.rotation.x = (55 / 180) * Math.PI;

const roof2 = roof.clone();
roof2.position.y = 2600;
roof2.position.z = 800;
roof2.rotation.x = -(55 / 180) * Math.PI;

const roofGroup = new THREE.Group();
roofGroup.add(roof);
roofGroup.add(roof2);

export default roofGroup;

import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "/qiangmian.jpg",
  () => {
    console.log("纹理加载成功");
  },
  undefined,
  (error) => {
    console.error("纹理加载失败:", error);
  }
);

// 设置纹理贴图重复平铺
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(3, 3);

// 开启颜色空间转换
texture.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.PlaneGeometry(1000, 1000);
const material = new THREE.MeshBasicMaterial({
  map: texture,
  //   这行代码的作用是为材质设置环境光遮蔽贴图（Ambient Occlusion Map）。环境光遮蔽贴图用于模拟物体表面因遮挡而产生的阴影效果，增强物体的真实感和细节。
  aoMap: texture,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -500);

export default mesh;

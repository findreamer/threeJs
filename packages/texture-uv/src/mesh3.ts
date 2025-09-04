import * as THREE from "three";

// 创建一个两头是弯曲的长的空心圆管
const geometry = new THREE.CylinderGeometry( 5, 5, 100, 32, 1, false );

// 创建一个贴图，贴到圆管
const texture = new THREE.TextureLoader().load( '/muxing.jpg' );
texture.colorSpace = THREE.SRGBColorSpace;
// 给题图y方向增加重复
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 1, 10 );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cylinder = new THREE.Mesh( geometry, material );
cylinder.name = "cylinder";
cylinder.position.set(200, 0, 0);


export default cylinder;
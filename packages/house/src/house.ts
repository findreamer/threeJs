import * as THREE from "three";
import foundation from "./foundation";
import { sideWall, sideWall2 } from "./side-wall";
import behindWall from "./behind-wall";
import frontWall from "./front-wall";
import roof from "./roof";
import doorstep from "./doorstep";

const house = new THREE.Group();
house.add(foundation);
house.add(sideWall);
house.add(sideWall2);
house.add(behindWall);
house.add(frontWall);
house.add(roof);
house.add(doorstep);

export default house;

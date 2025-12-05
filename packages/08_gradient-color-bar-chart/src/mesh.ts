import * as THREE from "three";

const group = new THREE.Group();

function createLine(type: "x" | "y") {
  const points = [
    new THREE.Vector3(0, 0, 0),
    type === "y" ? new THREE.Vector3(0, 100, 0) : new THREE.Vector3(100, 0, 0),
  ];
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({
    color: "#ffffff",
  });
  geometry.setFromPoints(points);

  const line = new THREE.Line(geometry, material);
  return line;
}

function createScaleLine(type: "x" | "y") {
  const points = [];
  for (let i = 0; i <= 100; i += 10) {
    if (type === "y") {
      points.push(new THREE.Vector3(0, i, 0));
      points.push(new THREE.Vector3(-5, i, 0));
    } else {
      points.push(new THREE.Vector3(i, 0, 0));
      points.push(new THREE.Vector3(i, -5, 0));
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: "#ffffff",
  });
  const scaleLine = new THREE.LineSegments(geometry, material);
  return scaleLine;
}

function createBar(dataArr) {
  const bars = new THREE.Group();
  dataArr.forEach((item, i) => {
    const geometry = new THREE.PlaneGeometry(10, item);
    const positions = geometry.attributes.position;
    const height = 100;

    const colorsArr = [];
    const color1 = new THREE.Color("red");
    const color2 = new THREE.Color("blue");
    for (let i = 0; i < positions.count; i++) {
      // console.log(positions.getY(i));
      // 在 Three.js 中，PlaneGeometry 的原点位于几何体的中心。这里加上 item/2 是为了将坐标从以中心为原点的坐标系转换为以底部为原点的坐标系。
      // 因为我们希望根据高度从底部到顶部来计算颜色渐变，所以需要将坐标调整到底部为起点，这样才能正确计算每个顶点相对于总高度的百分比。
      const percent = (positions.getY(i) + item / 2) / height;
      const c = color1.clone().lerp(color2, percent);
      colorsArr.push(c.r, c.g, c.b);
    }
    const colors = new Float32Array(colorsArr);
    geometry.attributes.color = new THREE.BufferAttribute(colors, 3);

    const material = new THREE.MeshBasicMaterial({
      // color: 'orange'
      vertexColors: true,
    });
    const bar = new THREE.Mesh(geometry, material);
    bar.position.x = 10 + i * 20 + 5;
    bar.position.y = item / 2;
    bars.add(bar);
  });
  return bars;
}

const xLine = createLine("x");
const yLine = createLine("y");

const xScaleLine = createScaleLine("x");
const yScaleLine = createScaleLine("y");

const bar = createBar([70, 20, 80, 40, 50]);
group.add(xLine, yLine, xScaleLine, yScaleLine, bar);

export default group;

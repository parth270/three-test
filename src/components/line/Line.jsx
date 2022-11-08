import React, { useLayoutEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const InnerLine = () => {
  const ref = React.useRef();
  const position = (i) => {
    const radius = 0.58;
    return [
      Math.cos((Math.PI / 6) * i) * radius,
      Math.sin((Math.PI / 6) * i) * radius,
      0,
    ];
  };

  const points = [];
  points.push(new THREE.Vector3(position(1)[0], position(1)[1], 0));
  points.push(new THREE.Vector3(position(2)[0], position(2)[1], 0));
  points.push(new THREE.Vector3(position(3)[0], position(3)[1], 0));
  points.push(new THREE.Vector3(position(4)[0], position(4)[1], 0));
  points.push(new THREE.Vector3(position(5)[0], position(5)[1], 0));
  points.push(new THREE.Vector3(position(6)[0], position(6)[1], 0));
  points.push(new THREE.Vector3(position(7)[0], position(7)[1], 0));
  points.push(new THREE.Vector3(position(8)[0], position(8)[1], 0));
  points.push(new THREE.Vector3(position(9)[0], position(9)[1], 0));
  points.push(new THREE.Vector3(position(10)[0], position(10)[1], 0));
  points.push(new THREE.Vector3(position(11)[0], position(11)[1], 0));
  points.push(new THREE.Vector3(position(12)[0], position(12)[1], 0));
  points.push(new THREE.Vector3(position(13)[0], position(13)[1], 0));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line ref={ref} geometry={lineGeometry}>
      <lineBasicMaterial
        attach="material"
        color={"#000"}
        linewidth={1}
        linejoin={"round"}
      />
    </line>
  );
};
const OuterLine = (props) => {
  const ref = React.useRef();
  const rad1 = 1.548;
  const position = (i, radius) => {
    return [
      Math.cos((Math.PI / 6) * i) * radius,
      Math.sin((Math.PI / 6) * i) * radius,
      0,
    ];
  };

  const points = [];
  points.push(new THREE.Vector3(position(1, rad1)[0], position(1, rad1)[1], 0));
  points.push(
    new THREE.Vector3(position(1, rad1)[0] + 0.5, position(1, rad1)[1] + 0.5, 0)
  );
  points.push(
    new THREE.Vector3(position(2, rad1)[0] + 0.5, position(2, rad1)[1] + 0.5, 0)
  );
  points.push(new THREE.Vector3(position(2, rad1)[0], position(2, rad1)[1], 0));
  points.push(new THREE.Vector3(position(3, rad1)[0], position(3, rad1)[1], 0));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  //   useLayoutEffect(()=>{
  //     ref.current.lookAt(0,0,0)
  //   })
  return (
    <>
      <line ref={ref} geometry={lineGeometry} position={props.position}>
        <lineBasicMaterial
          attach="material"
          color={"#000"}
          linewidth={1}
          linejoin={"round"}
        />
      </line>
    </>
  );
};

const Liness = () => {
  const position = (i) => {
    const radius = 1.548;

    return [
      Math.cos((Math.PI / 6) * i) * radius,
      Math.sin((Math.PI / 6) * i) * radius,
      0,
    ];
  };
  return (
    <>
      <OuterLine position={[0,0,0]}  />
    </>
  );
};

const Line = (props) => {
  const ref = React.useRef();
  useFrame(() => {
    //   ref.current.rotation.x += 0.01;
    //   ref.current.rotation.y += 0.01;
    //   ref.current.rotation.z += 0.01;
  });

  return (
    <group position={props.position} ref={ref}>
      <InnerLine />
      <Liness />
    </group>
  );
};

export default Line;

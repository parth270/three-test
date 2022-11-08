import React, { useLayoutEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const pi = Math.PI;
const arg1 = 0.416;

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

  useLayoutEffect(() => {
    ref.current.rotation.z = pi / 12;
  });
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
const SingleLine = (props) => {
  const ref = React.useRef();
  const arg = arg1-0.003
  const points = [];
  points.push(new THREE.Vector3(0, arg, 0));
  points.push(new THREE.Vector3(0, -arg, 0));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  useLayoutEffect(() => {
    ref.current.lookAt(0, 0, 0);
    //  ref.current.rotation.z=props.angle;
  });
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

const UpperLine = (props) => {
  const ref = React.useRef();
  const arg = arg1
  const points = [];
  points.push(new THREE.Vector3(0, arg, 0));
  points.push(new THREE.Vector3(0, arg, -0.624));
  points.push(new THREE.Vector3(0, -arg, -0.624));
  points.push(new THREE.Vector3(0, -arg, 0));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  useLayoutEffect(() => {
    ref.current.lookAt(0, 0, 0);
    //  ref.current.rotation.z=props.angle;
  });
  return (
    <>
      <line ref={ref} geometry={lineGeometry} position={props.position}>
        <lineBasicMaterial
          attach="material"
          color={"#000"}
          linewidth={1}
          linejoin={"round"}
        />
        {/* <meshStandardMaterial color="#ccc" /> */}
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
      <SingleLine position={position(1)} />
      <UpperLine position={position(2)} />
      <SingleLine position={position(3)} />
      <UpperLine position={position(4)} />
      <SingleLine position={position(5)} />
      <UpperLine position={position(6)} />
      <SingleLine position={position(7)} />
      <UpperLine position={position(8)} />
      <SingleLine position={position(9)} />
      <UpperLine position={position(10)} />
      <SingleLine position={position(11)} />
      <UpperLine position={position(12)} />
    </>
  );
};

const Square = (props) => {
  const ref = React.useRef();
  useLayoutEffect(() => {
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={ref} position={props.position}>
      <boxGeometry args={[0.00001,arg1*2,arg1*3]} />
      <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
    </mesh>
  );
};

const Squares = () => {
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
      <Square position={position(2)} />
      <Square position={position(4)} />
      <Square position={position(4)} />
      <Square position={position(6)} />
      <Square position={position(8)} />
      <Square position={position(10)} />
      <Square position={position(12)} /> 
    </>
  );
};

const Surface = (props) => {
  const ref = React.useRef();
  useFrame(() => {
    //   ref.current.rotation.x += 0.01;
    //   ref.current.rotation.y += 0.01;
    //   ref.current.rotation.z += 0.01;
  });

  return (
    <group position={props.position} ref={ref}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, pi / 12]}>
        <ringGeometry args={[0.5799, 1.6, 12]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh>
      <Squares />
      <InnerLine />
      <Liness />
    </group>
  );
};

export default Surface;

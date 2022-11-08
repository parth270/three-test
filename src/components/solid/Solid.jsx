import React, { useLayoutEffect } from "react";
//  import classes from './Solid.module.css';
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const Pi = Math.PI;

let index = 1;
const position = (i,radius) => {
  if (index === 1) {
    index++;
    return [
      Math.cos((Math.PI / 5) * i) * radius,
      Math.sin((Math.PI / 5) * i) * radius,
      0,
    ];
  } else if (index === 2) {
    index++;
    return [
      Math.cos((Math.PI / 5) * i) * radius,
      Math.sin((Math.PI / 5) * i) * radius,
      0,
    ];
  } else if (index === 3) {
    index = 1;
    return [
      Math.cos((Math.PI / 5) * i) * radius,
      Math.sin((Math.PI / 5) * i) * radius,
      0,
    ];
  }
};

const WallArray = [
  { position: position(1,1.72), id: 0 },
  { position: position(2,1.72), id: 1 },
  { position: position(3,1.72), id: 2 },
  { position: position(4,1.72), id: 3 },
  { position: position(5,1.72), id: 4 },
  { position: position(6,1.72), id: 5 },
  { position: position(7,1.72), id: 6 },
  { position: position(8,1.72), id: 7 },
  { position: position(9,1.72), id: 8 },
  { position: position(10,1.72), id: 9 },
];
const WallArrayIn = [
  { position: position(1,0.57), id: 0 },
  { position: position(2,0.57), id: 1 },
  { position: position(3,0.57), id: 2 },
  { position: position(4,0.57), id: 3 },
  { position: position(5,0.57), id: 4 },
  { position: position(6,0.57), id: 5 },
  { position: position(7,0.57), id: 6 },
  { position: position(8,0.57), id: 7 },
  { position: position(9,0.57), id: 8 },
  { position: position(10,0.57), id: 9 },
];

const Wall = (props) => {

  const ref = React.useRef();
  useLayoutEffect(()=>{
    ref.current.lookAt(0,0,0)
  })
  return (
    <mesh position={props.position} ref={ref} rotation={props.rotation?props.rotation:[0,0,0]} >
      <planeGeometry args={props.args} />
      <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
    </mesh>
  );
};

const Gear = (props) => {
  const ref = React.useRef();
  const ref1 = React.useRef();
  useLayoutEffect(() => {
    ref1.current.depth = 10;
  });
  //  useFrame(() => {
  //     ref.current.rotation.x += 0.01;
  //     ref.current.rotation.y += 0.01;
  //     ref.current.rotation.z += 0.01;
  //  });

  const obj = useLoader(OBJLoader, "./line.obj");

  return (
    <group ref={ref} scale={2} position={props.position} >
      <mesh ref={ref1} position={[0, 0, -0.5]} rotation={[0,0,Pi/10]} >
        <ringGeometry args={[0.6, 1.8, 10]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh>
      <Wall position={[1, 0, 0]} />
      {WallArray.map((item) => {
        return (
          <Wall
            key={item.id}
            id={item.id}
            args={[1.01, 1.119]}
            position={item.position}
            rotation={item.rotation}
          />
        );
      })}
      {WallArrayIn.map((item) => {
        return (
          <Wall
            key={item.id}
            id={item.id}
            args={[1.00, 1.119]}
            position={item.position}
            rotation={item.rotation}
          />
        );
      })}
      <mesh position={[0, 0, 0.5]} rotation={[0,0,Pi/10]} >
        <ringGeometry args={[0.6, 1.8, 10]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh>
    </group>
  );
};

export default Gear;

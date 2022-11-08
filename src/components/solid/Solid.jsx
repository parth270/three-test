import React, { useLayoutEffect } from "react";
//  import classes from './Solid.module.css';
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const Pi = Math.PI;

let index = 1;
const position = (i,radius) => {
    return [
      Math.cos((Math.PI / 6) * i) * radius,
      Math.sin((Math.PI / 6) * i) * radius,
      0,
    ];
};
const positionCube = (i,radius) => {
    return [
      Math.cos((Math.PI /3) * i) * radius,
      Math.sin((Math.PI /3) * i) * radius,
      0,
    ];
};
const rad1 = 1.548  
const WallArray = [
  { position: position(1,rad1), id: 0 },
  { position: position(2,rad1), id: 1 },
  { position: position(3,rad1), id: 2 },
  { position: position(4,rad1), id: 3 },
  { position: position(5,rad1), id: 4 },
  { position: position(6,rad1), id: 5 },
  { position: position(7,rad1), id: 6 },
  { position: position(8,rad1), id: 7 },
  { position: position(9,rad1), id: 8 },
  { position: position(10,rad1), id: 9 },
  { position: position(11,rad1), id: 10 },
  { position: position(12,rad1), id: 11 },
];
const rad2 =0.58;
const WallArrayIn = [
  { position: position(1,rad2), id: 0 },
  { position: position(2,rad2), id: 1 },
  { position: position(3,rad2), id: 2 },
  { position: position(4,rad2), id: 3 },
  { position: position(5,rad2), id: 4 },
  { position: position(6,rad2), id: 5 },
  { position: position(7,rad2), id: 6 },
  { position: position(8,rad2), id: 7 },
  { position: position(9,rad2), id: 8 },
  { position: position(10,rad2), id: 9 },
  { position: position(11,rad2), id: 10 },
  { position: position(12,rad2), id:11 },
];
const cuberad =1.8975;
const cubeArr = [
  { position: positionCube(1,cuberad), id: 0 },
  { position: positionCube(2,cuberad), id: 1 },
  { position: positionCube(3,cuberad), id: 2 },
  { position: positionCube(4,cuberad), id: 3 },
  { position: positionCube(5,cuberad), id: 4 },
  { position: positionCube(6,cuberad), id: 5 },
];

const Cube =(props)=>{
  const ref = React.useRef();
  useLayoutEffect(()=>{
    ref.current.lookAt(0,0,0)
  })
  return (
    <mesh position={props.position} ref={ref} rotation={props.rotation?props.rotation:[0,0,0]} >
      <boxGeometry args={props.args} />
      <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
    </mesh>
  );
}

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

  return (
    <group ref={ref} scale={1.4} position={props.position} >
      <mesh position={[0, 0, -0.3]} rotation={[0,0,Pi/12]} >
        <ringGeometry args={[0.6, 1.6, 12]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh>
      {WallArray.map((item) => {
        return (
          <Wall
            key={item.id}
            id={item.id}
            args={[0.6, 0.829]}
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
            args={[0.6, 0.322]}
            position={item.position}
            rotation={item.rotation}
          />
        );
      })}
      {cubeArr.map((item)=>{
        return(
          <Cube
          key={item.id}
          id={item.id}
          args={[0.60, 0.829,0.85]}
          position={item.position}
          />
        )
      })}
      <mesh position={[0, 0, 0.3]} rotation={[0,0,Pi/12]} >
        <ringGeometry args={[0.6, 1.6, 12]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh>
    </group>
  );
};

export default Gear;

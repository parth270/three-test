import React, { useLayoutEffect, useMemo } from "react";
//  import classes from './Solid.module.css';
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const Gear = (props) => {

  const shape = useMemo(()=>{

    
  })

  return (
    <group  scale={2}>
      <mesh  position={[0, 0, -0.5]}>
        <ringGeometry args={[0.6, 1.8, 10]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh>
    </group>
  );
};

export default Gear;

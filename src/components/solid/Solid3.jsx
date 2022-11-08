import React, { useEffect, useLayoutEffect, useMemo } from "react";
//  import classes from './Solid.module.css';
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const Gear = (props) => {

    const shape = useMemo(()=>{
        const ring = new THREE.RingGeometry(0.6, 1.8, 10);

        return ring;
    })
    const material = useMemo(()=>{
        const Material = new THREE.MeshStandardMaterial();
        Material.color = "#ccc";
        Material.side = THREE.DoubleSide
        return Material
    })
    const mesh1 =useMemo(()=>{
       const mesh = new THREE.Mesh(shape,material);
        return mesh;
    });
    const mesh2=useMemo(()=>{
        const mesh = new THREE.Mesh(shape,material);
        return mesh;
    })
    const group = new THREE.Group(mesh1,mesh2);
    const {scene} = useThree();
    scene.add(group);
    useEffect(()=>{
        
    })
  return (
    <group  scale={2}>
      {/* <mesh  position={[0, 0, -0.5]}>
        <ringGeometry args={[0.6, 1.8, 10]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
      </mesh> */}
    </group>
  );
};

export default Gear;

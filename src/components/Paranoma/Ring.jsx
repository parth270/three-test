import React from "react";
import * as THREE from "three";

const Ring = (props) => {
  return (
    <>
      <group
        name={props.name}
        position={[props.position.x, props.position.y, props.position.z]}
      >
        <mesh name={`${props.name}-c`}  rotation={[90 * (Math.PI / 180), 0, 0]}>
          <ringGeometry args={[1, 5, 32]} />
          <meshBasicMaterial color={"#fff"} side={THREE.DoubleSide} />
        </mesh>
        <mesh name={`${props.name}-c`} rotation={[90 * (Math.PI / 180), 0, 0]}>
          <ringGeometry args={[6, 7, 32]} />
          <meshBasicMaterial color={"#fff"} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
};

export default Ring;

import React, { useLayoutEffect, useMemo } from "react";
//  import classes from './Solid.module.css';
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { BufferGeometry } from "three";
const Gear = (props) => {
  //     var s = new THREE.Shape();
  //  s.moveTo( 0,0 );
  //  s.lineTo( 0, 50 );
  //  s.lineTo( 20, 80 );
  //  s.lineTo( 50, 50 );
  //  s.lineTo( 0, 0 );
  const { scene } = useThree();
  const shape = useMemo(() => {
    const vertices = [
      // front
      { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 1] },
      { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 1] },
      { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 0] },

      { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 0] },
      { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 1] },
      { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 0] },
      // right
      { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 1] },
      { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 1] },
      { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 0] },

      { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 0] },
      { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 1] },
      { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 0] },
      // back
      { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 1] },
      { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 1] },
      { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 0] },

      { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 0] },
      { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 1] },
      { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 0] },
      // left
      { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 1] },
      { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 1] },
      { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 0] },

      { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 0] },
      { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 1] },
      { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 0] },
      // top
      { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 1] },
      { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 1] },
      { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 0] },

      { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 0] },
      { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 1] },
      { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 0] },
      // bottom
      { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 1] },
      { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 1] },
      { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 0] },

      { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 0] },
      { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 1] },
      { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 0] },
    ];
    const positions = [];
    const normals = [];
    const uvs = [];
    for (const vertex of vertices) {
      positions.push(...vertex.pos);
      normals.push(...vertex.norm);
      uvs.push(...vertex.uv);
    }
    const geometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(positions),
        positionNumComponents
      )
    );
    geometry.setAttribute(
      "normal",
      new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents)
    );
    geometry.setAttribute(
      "uv",
      new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents)
    );

    return geometry;
  });
  const material = new THREE.MeshStandardMaterial({ color: "#ccc" });
  material.side = THREE.DoubleSide;
  const mesh = new THREE.Mesh(shape, material);
  scene.add(mesh);

  //   return (
  //     <group  scale={2}>
  //       <mesh  position={[0, 0, -0.5]}>
  //         <ringGeometry args={[0.6, 1.8, 10]} />
  //         <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" />
  //       </mesh>
  //     </group>
  //   );

  return (
    <mesh>
      {/* <BufferGeometry args={[shape]} />
      <meshStandardMaterial side={THREE.DoubleSide} color="#ccc" wireframe={true} /> */}
    </mesh>
  );
};

export default Gear;

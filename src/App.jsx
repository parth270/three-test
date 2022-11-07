import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import img1 from "./gear-line.jpg";
import img2 from "./surface-gear.jpeg";

const Gear = (props) => {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;
  });

  const obj = useLoader(OBJLoader, "./line.obj");

  return (
    <primitive ref={ref} position={props.position} object={obj} scale={0.05} />
  );
};
const Line = (props) => {
  const colorMap = useLoader(THREE.TextureLoader, img1);
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
      <mesh position={props.position} ref={ref} >
        <planeBufferGeometry args={[10, 10]} attach="geometry" />
        <meshStandardMaterial
          map={colorMap}
          attach="material"
          side={THREE.DoubleSide}
          color="white"
        />
      </mesh>
  );
};
const Surface = (props) => {
  const colorMap = useLoader(THREE.TextureLoader, img2);
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
      <mesh position={props.position} ref={ref} >
        <planeBufferGeometry args={[10, 10]} attach="geometry" />
        <meshStandardMaterial
          map={colorMap}
          attach="material"
          side={THREE.DoubleSide}
          color="white"
        />
      </mesh>
  );
};

function App() {
  const [gear, setGear] = React.useState(true);
  const [line, setLine] = React.useState(false);
  const [surface, setSurface] = React.useState(false);

  return (
    <>
      <div className="button-container">
        <button

          style={{
            backgroundColor: gear ? "#ccc" : "#000",
            borderColor: gear ? "#ccc" : "#000",
          }}
          onClick={() => {
            setGear(true);
            setLine(false);
            setSurface(false);
          }}
        >
          Gear
        </button>
        <button
          style={{
            backgroundColor: line ? "#ccc" : "#000",
            borderColor: line ? "#ccc" : "#000",
          }}
          onClick={() => {
            setGear(false);
            setLine(true);
            setSurface(false);
          }}
        >
          Line
        </button>
        <button
          style={{
            backgroundColor: surface ? "#ccc" : "#000",
            borderColor: surface ? "#ccc" : "#000",
          }}
          onClick={() => {
            setGear(false);
            setLine(false);
            setSurface(true);
          }}
        >
          Surface
        </button>
      </div>
      {/* {
        line && 
        <div className="line-container">
          <img src="./gear-line.svg" alt="" />
        </div>
      } */}
      <div className="canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 65 }} colorManagement>
          <pointLight position={[0, 4, 0]} intensity={0.4} color="white" />
          <ambientLight intensity={0.7} />
          <Gear position={gear ? [0, 0, 0] : [1000, 1000, 1000]} />
          <Suspense fallback={null}>
            <Line position={line ? [0, 0, 0] : [1000, 1000, 1000]} />
          </Suspense>
          <Surface position={surface ? [0, 0, 0] : [1000, 1000, 1000]} />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Canvas>
      </div>
    </>
  );
}

export default App;

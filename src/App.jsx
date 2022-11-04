import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";

const Gear = (props) => {
  const ref = React.useRef();
  useFrame(() => {
    // ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
    // ref.current.rotation.z += 0.01;
    ref.current.rotation.y=ref.current.rotation.x
  });

  const obj = useLoader(OBJLoader, "./gear.obj");

  return (
    <primitive ref={ref}  position={props.position} object={obj}  scale={0.05} />
  );
};
const Line = (props) => {
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
const Surface = (props) => {
  const obj = useLoader(OBJLoader, "./surface.obj");

  return <primitive position={props.position} object={obj} scale={0.05} />;
};

function App() {
  const [gear, setGear] = React.useState(true);
  const [line, setLine] = React.useState(false);
  const [surface, setSurface] = React.useState(false);

  return (
    <>
      <div className="button-container">
        <button
          style={{ backgroundColor: gear ? "#ccc" : "#000" ,borderColor: gear ? "#ccc" : "#000"}}
          onClick={() => {
            setGear(true);
            setLine(false);
            setSurface(false);
          }}
        >
          Gear
        </button>
        <button
          style={{ backgroundColor: line ? "#ccc" : "#000" ,borderColor: line ? "#ccc" : "#000"}}
          onClick={() => {
            setGear(false);
            setLine(true);
            setSurface(false);
          }}
        >
          Line
        </button>
        <button
          style={{ backgroundColor: surface ? "#ccc" : "#000",borderColor: surface ? "#ccc" : "#000" }}
          onClick={() => {
            setGear(false);
            setLine(false);
            setSurface(true);
          }}
        >
          Surface
        </button>
      </div>
      {
        line && 
        <div className="line-container">
          <img src="./gear-line.svg" alt="" />
        </div>
      }
      <div className="canvas">
        <Canvas camera={{ position: [10, 10, 2], fov: 65 }}>
          <pointLight position={[0, 4, 0]} intensity={0.4} color="white" />
          <Gear position={gear ? [0, 0, 0] : [1000, 1000, 1000]} />
          {/* <Line position={line ? [0, 0, 0] : [1000, 1000, 1000]} /> */}
          <Surface position={surface ? [0, 0, 0] : [1000, 1000, 1000]} />
          <OrbitControls  />
          {/* <Environment preset="sunset" background /> */}
        </Canvas>
      </div>
    </>
  );
}

export default App;

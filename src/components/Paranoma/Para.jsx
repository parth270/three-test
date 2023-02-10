import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import Move from "./Move";
import Ring from "./Ring";
const Para = () => {
  const three = useThree();
  React.useEffect(() => {
    console.log(three);
    const scene = three.scene;
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);
    // const rgbe = new RGBELoader();
    // rgbe.load("./f1.hdr",(texture)=>{
    //     texture.mapping=THREE.EquirectangularReflectionMapping;
    //     scene.environment = texture;
    // })
    const texture = new THREE.TextureLoader().load("./one-2.jpeg");
    texture.encoding = THREE.sRGBEncoding;
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name="sphere"
    scene.add(mesh);
  });
  
  return (
    <>
      <Move/>
      <Ring position={{ x: 2, y: -100, z: -100 }} name="f1" />
      <Ring position={{ x: -150, y: -100, z: -200 }} name="f2" />
    </>
  );
};

export default Para;

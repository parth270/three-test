import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
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

    scene.add(mesh);
  });
  return <></>;
};

export default Para;

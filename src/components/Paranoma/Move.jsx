import React, { useContext } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { AppContext } from "../context/Context";

const Move = () => {
  const three = useThree();
  const { setTheme } = useContext(AppContext);

  React.useEffect(() => {

    const MakeElement=(text)=>{
        const el = document.createElement("div");
        el.id = "checkkked";
        el.className = "cont";
        const h1 = document.createElement("h1");
        h1.innerHTML=text;
        el.appendChild(h1);
        document.body.appendChild(el);
    }

    const clearElement=()=>{
        const el = document.getElementById("checkkked");
        if(el){
            document.body.removeChild(el);
        }
    }

    let selected = null;
    const onMove = (e) => {
      const mouse = {};
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      const camera = three.camera;
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const scene = three.scene;
      const raycaster = three.raycaster;
      raycaster.setFromCamera(mouse, camera);
      const f1 = scene.getObjectByName("f1");
      const f2 = scene.getObjectByName("f2");
      const intersects = raycaster.intersectObjects([f1, f2]);
      if (intersects.length > 0) {
        if (selected === null) {
          const curr = intersects[0].object;
          const n1 = curr.name.slice(0, 2);
          const g1 = scene.getObjectByName(n1);
          document.body.style.cursor = "pointer";
          selected = g1;
          g1.scale.x = 1.1;
          g1.scale.y = 1.1;
          g1.scale.z = 1.1;
        }
      } else {
        if (selected) {
          selected = null;
          document.body.style.cursor = null;
          clearElement();
          f1.scale.x = 1;
          f1.scale.y = 1;
          f1.scale.z = 1;
          f2.scale.x = 1;
          f2.scale.y = 1;
          f2.scale.z = 1;
        }
      }
    };

    const onDown=()=>{

        if(selected){
            const el = document.getElementById("checkkked");
            if(!el){
                MakeElement(selected.name);
                console.log(selected);
                // const sphere = three.scene.getObjectByName("sphere");
                // sphere.position.copy(new THREE.Vector3(selected.position.x,0,selected.position.z))
            }
        }
    }

    document.addEventListener("pointermove", onMove, false);
    document.addEventListener("pointerdown", onDown, false);
    return () => {
        document.removeEventListener("pointerdown", onDown, false);
      document.removeEventListener("pointermove", onMove, false);
    };
  });
  return <></>;
};

export default Move;

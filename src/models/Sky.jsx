import { useGLTF } from "@react-three/drei";
import React from "react";
import SkyScene from "../assets/3d/sky.glb";

function Sky() {
  {
    /* premitive item becuse we dont need to intiracte with it just consume it
        while the island is not an premitive item , becuse it have multible mesh and we need to movve around and touch it and interact with it   */
  }

  const sky = useGLTF(SkyScene);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;

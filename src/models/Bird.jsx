import { useGLTF } from "@react-three/drei";
import React from "react";
import BirdScene from "../assets/3d/bird.glb";

function Bird() {
  const { scene, animation } = useGLTF(BirdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;

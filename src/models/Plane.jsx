import { useGLTF } from "@react-three/drei";
import React from "react";
import PlaneScene from "../assets/3d/plane.glb";

function Plane({ isRotating, ...props }) {
  const { scene, animation } = useGLTF(PlaneScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;

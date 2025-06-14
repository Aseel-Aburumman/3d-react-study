import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../component/Loader";
import { SpotLight } from "@react-three/drei";
import Island from "../models/Islands";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 47.7, 0];
    if (window.innerWidth > 768) {
      screenScale = [0.9, 0.9, 0.9];
      // screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
      // screenPosition = [0, -6.5, -43];
    }

    return [screenPosition, screenScale, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth > 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenPosition, screenScale];
  };

  const [islandPosition, islandScale, islandRotation] =
    adjustIslandForScreenSize();
  const [PlanePosition, PlaneScale] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative ">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center  ">
        POP UP{" "}
      </div>

      {/*  contain the 3d objects and all its lighting */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          near: 0.1, //close to camera
          far: 1000, //far from camera
        }}
      >
        {/* used for redering thwe load screen  */}
        <Suspense fallback={<Loader />}>
          {/* we  need to download 3d filwe  3d model form sketchfab (GLB) , and after it downlaod we need to conver it throught the website (gltf.pmnd.rs) */}

          {/*simulate light coming from distant source aka sun , 
          we controll  position of the sun and intensity of the light */}
          <directionalLight position={[1, 1, 1]} intensity={2} />

          {/* alumunate all object on the sceene equally without casting shadow  */}
          <ambientLight intensity={0.5} />

          {/* amits lights from all direction on single point,
           on the out side we dont need it becuse we have the sun and athe ambionts   */}
          {/* <pointLight /> */}

          {/* similer to pointLight amits light from one direction but in the shape of cone and provide an angle  */}
          {/* <SpotLight /> */}

          {/* ilumunate the scene with  gradiunts  */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Bird />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane
            isRotating={isRotating}
            PlanePosition={PlanePosition}
            PlaneScale={PlaneScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

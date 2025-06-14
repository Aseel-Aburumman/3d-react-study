import { Html } from "@react-three/drei";
// anything render within the canvase must be 3d so we needed to turn it into 3d using drei
function Loader() {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-5010 rounder-full animate-spin"></div>
      </div>
    </Html>
  );
}

export default Loader;

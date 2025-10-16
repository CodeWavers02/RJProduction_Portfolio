import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
// import { CameraModel } from "./CameraModel.jsx";
// import { LaptopModel } from "./LaptopModel.jsx";
import {ComputerModel} from "./ComputerModel.jsx";
// import { LaptopModel } from "./LaptopModel.jsx";
// import {img} from '../assets/react.svg';
export default function ComputerModelContainer() {
  return (
    <Canvas>
      <Suspense fallback= "loading...">
        <Stage environment="night" intensity={0.5}>
     
        {/* <LaptopModel/> */}
        <ComputerModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[2, 0, 1.8]} zoom={0.7} makeDefault />
      </Suspense> 
    </Canvas>
  );
}

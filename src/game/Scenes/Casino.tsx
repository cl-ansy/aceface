"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import TableView from "@/game/Views/TableView";

function Helpers() {
  const camera = useThree((state) => state.camera);
  return (
    <>
      {/* <arrowHelper /> */}
      <axesHelper args={[1000]} />
      {/* <cameraHelper args={[camera]} /> */}
      {/* <gridHelper args={[2000, 40]} /> */}
      <Perf position="top-left" />
    </>
  );
}

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ sortObjects: false, antialias: true }}
        flat
      >
        <TableView />

        {/* <Helpers /> */}
      </Canvas>
    </div>
  );
}

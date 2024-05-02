"use client";

import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import "@/game/Loaders/AssetLoader";
import LoadingProgress from "@/game/Loaders/LoadingProgress";

import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
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
        // frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ sortObjects: false, antialias: true }}
        flat
      >
        <color attach="background" args={["#daf5f0"]} />

        <TableCamera />
        <TableControls />
        <TableLighting />

        <Suspense fallback={<LoadingProgress />}>
          <TableView />
        </Suspense>

        {/* <Helpers /> */}
      </Canvas>
    </div>
  );
}

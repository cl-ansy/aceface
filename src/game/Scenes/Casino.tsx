"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import "@/game/Loaders/AssetLoader";
import LoadingProgress from "@/game/Loaders/LoadingProgress";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
import TableView from "@/game/Views/TableView";

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ sortObjects: false }}
        flat
      >
        <color attach="background" args={["#daf5f0"]} />
        <gridHelper
          args={[2000, 40, 0xff0000, "teal"]}
          rotation={[Math.PI / 2, 0, 0]}
        />

        <TableCamera />
        <TableControls />
        <TableLighting />

        <Suspense fallback={<LoadingProgress />}>
          <TableView />
        </Suspense>

        <Perf position="top-left" />
      </Canvas>
    </div>
  );
}

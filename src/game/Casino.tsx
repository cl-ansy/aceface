"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import "@/game/Loaders/AssetLoader";
import LoadingProgress from "@/game/Loaders/LoadingProgress";
import BaseLighting from "@/game/Staging/BaseLighting";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import Table from "@/game/Table";

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas
        // frameloop="demand"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        flat
      >
        <color attach="background" args={["#daf5f0"]} />
        <TableCamera />
        <TableControls />
        <Suspense fallback={<LoadingProgress />}>
          <Table />
        </Suspense>
        <BaseLighting />
        <Stats />
      </Canvas>
    </div>
  );
}

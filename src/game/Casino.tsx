"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import AssetLoader from "@/game/Loaders/AssetLoader";
import LoadingProgress from "@/game/Loaders/LoadingProgress";
import BaseLighting from "@/game/Staging/BaseLighting";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import Table from "@/game/Table";

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas dpr={[1, 2]} linear flat>
        <TableCamera />
        <TableControls />
        <Suspense fallback={<LoadingProgress />}>
          <AssetLoader />
          <Table />
        </Suspense>
        <BaseLighting />
      </Canvas>
    </div>
  );
}

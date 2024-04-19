"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import AssetLoader from "@/game/Loaders/AssetLoader";
import LoadingProgress from "@/game/Loaders/LoadingProgress";
import BaseLighting from "@/game/Staging/BaseLighting";
import TopDownControls from "@/game/Controls/TopDownControls";
import TopDownCamera from "@/game/Cameras/TopDownCamera";
import CardMesh from "@/game/Meshes/CardMesh";

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas frameloop="demand" dpr={[1, 2]} linear flat>
        <TopDownCamera />
        <TopDownControls />
        <Suspense fallback={<LoadingProgress />}>
          <AssetLoader />
          <CardMesh name="JD" />
        </Suspense>
        <BaseLighting />
      </Canvas>
    </div>
  );
}

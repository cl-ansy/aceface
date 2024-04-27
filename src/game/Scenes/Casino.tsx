"use client";

import { Suspense } from "react";
import { useAtom } from "jotai";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import "@/game/Loaders/AssetLoader";
import { authAtom } from "@/state/atoms";
import LoadingProgress from "@/game/Loaders/LoadingProgress";
import BaseLighting from "@/game/Staging/BaseLighting";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableView from "@/game/Views/TableView";

export default function CardShow() {
  useAtom(authAtom);

  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        flat
      >
        <color attach="background" args={["#daf5f0"]} />
        <TableCamera />
        <TableControls />
        <Suspense fallback={<LoadingProgress />}>
          <TableView />
        </Suspense>
        <BaseLighting />
        <Stats />
      </Canvas>
    </div>
  );
}

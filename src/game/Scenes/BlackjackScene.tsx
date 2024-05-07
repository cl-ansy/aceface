"use client";

import { Suspense } from "react";

import { HandActions } from "@/game/Actions/HandActions";
import LoadingProgress from "@/game/Loaders/LoadingProgress";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
import TableMesh from "@/game/Meshes/TableMesh";
import ShoeMesh from "@/game/Meshes/ShoeMesh";
import { InstanceProvider } from "@/game/Meshes/GLTF/InstanceProvider";
import { TableGame } from "@/game/Scenes/TableScene";

export function BlackjackScene() {
  return (
    <>
      <TableCamera />
      <TableControls />
      <TableLighting />

      <Suspense fallback={<LoadingProgress />}>
        <HandActions />
        <InstanceProvider>
          <TableMesh />
          <ShoeMesh />
          {/* <TableGame /> */}
        </InstanceProvider>
      </Suspense>
    </>
  );
}

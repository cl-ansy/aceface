"use client";

import { Suspense } from "react";

import { HandActions } from "@/game/actions/HandActions";
import LoadingProgress from "@/game/loaders/LoadingProgress";
import TableCamera from "@/game/cameras/TableCamera";
import TableControls from "@/game/controls/TableControls";
import TableLighting from "@/game/lighting/TableLighting";
import TableMesh from "@/game/meshes/TableMesh";
import ShoeMesh from "@/game/meshes/ShoeMesh";
import { InstanceProvider } from "@/game/meshes/gltf/InstanceProvider";
import BlackjackGameManager from "@/game/BlackjackGameManager";

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
          <BlackjackGameManager />
        </InstanceProvider>
      </Suspense>
    </>
  );
}

"use client";

import { Suspense } from "react";

import LoadingProgress from "@/game/common/loaders/LoadingProgress";
import TableCamera from "@/game/common/cameras/TableCamera";
import TableControls from "@/game/common/controls/TableControls";
import TableLighting from "@/game/common/lighting/TableLighting";
import TableMesh from "@/game/common/meshes/TableMesh";
import ShoeMesh from "@/game/common/meshes/ShoeMesh";
import { InstanceProvider } from "@/game/common/meshes/gltf/InstanceProvider";
import { HandActions } from "@/game/blackjack/actions/HandActions";
import BlackjackGameManager from "@/game/blackjack/BlackjackGameManager";

export function TableScene() {
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

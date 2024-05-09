"use client";

import TableMesh from "@/game/common/meshes/TableMesh";
import ShoeMesh from "@/game/common/meshes/ShoeMesh";
import { InstanceProvider } from "@/game/common/meshes/gltf/InstanceProvider";
import { HandActions } from "@/game/blackjack/actions/HandActions";
import BlackjackGameManager from "@/game/blackjack/BlackjackGameManager";

export default function BlackjackScene() {
  return (
    <>
      <HandActions />
      <InstanceProvider>
        <TableMesh />
        <ShoeMesh />
        <BlackjackGameManager />
      </InstanceProvider>
    </>
  );
}

"use client";

import TableMesh from "@/game/common/meshes/TableMesh";
import { InstanceProvider } from "@/game/common/meshes/gltf/InstanceProvider";
import BlackjackGameManager from "@/game/blackjack/BlackjackGameManager";

export default function BlackjackScene() {
  return (
    <>
      <InstanceProvider>
        <TableMesh />
        <BlackjackGameManager />
      </InstanceProvider>
    </>
  );
}

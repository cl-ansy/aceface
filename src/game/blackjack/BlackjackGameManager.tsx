"use client";

import Player from "@/game/blackjack/Player";
import { PlayerInterface } from "@/game/blackjack/PlayerInterface";
import ShoeMesh from "@/game/common/meshes/ShoeMesh";

export default function BlackjackGameManager() {
  return (
    <>
      <PlayerInterface />
      <ShoeMesh />
      <Player position={1} />
      <Player position={2} />
      <Player position={3} />
      <Player position={4} />
      <Player position={5} />
    </>
  );
}

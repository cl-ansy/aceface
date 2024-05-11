"use client";

import Player from "@/game/blackjack/Player";
import { PlayerInterface } from "@/game/blackjack/PlayerInterface";
import ShoeMesh from "@/game/common/meshes/ShoeMesh";

export default function BlackjackGameManager() {
  return (
    <>
      <PlayerInterface />
      <ShoeMesh />
      <Player seat={1} />
      <Player seat={2} />
      <Player seat={3} />
      <Player seat={4} />
      <Player seat={5} />
    </>
  );
}

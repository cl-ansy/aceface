"use client";

import Player from "@/game/blackjack/Player";
import { PlayerUI } from "@/game/blackjack/PlayerUI";
import ShoeMesh from "@/game/common/meshes/ShoeMesh";

import {
  playerOneAtom,
  playerTwoAtom,
  playerThreeAtom,
  playerFourAtom,
  playerFiveAtom,
} from "@/state/blackjackAtoms";

export default function BlackjackGameManager() {
  return (
    <>
      <PlayerUI />
      <ShoeMesh />
      <Player seat={1} playerAtom={playerOneAtom} />
      <Player seat={2} playerAtom={playerTwoAtom} />
      <Player seat={3} playerAtom={playerThreeAtom} />
      <Player seat={4} playerAtom={playerFourAtom} />
      <Player seat={5} playerAtom={playerFiveAtom} />
    </>
  );
}

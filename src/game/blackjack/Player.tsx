import { useState, useEffect, useMemo } from "react";
import { atom, useAtomValue } from "jotai";

import CardMesh from "@/game/common/meshes/CardMesh";
import { playerFamily } from "@/state/blackjackAtoms";
import { getCardSpring } from "@/lib/animations";

type PlayerProps = {
  seat: number;
};

export default function Player({ seat }: PlayerProps) {
  const player = useAtomValue(playerFamily(seat));

  if (!player || !player.hand) return null;

  return (
    <>
      {Object.entries(player.hand).map(([k, v], i) => (
        <CardMesh key={i} name={v} spring={getCardSpring(Number(k), seat)} />
      ))}
    </>
  );
}

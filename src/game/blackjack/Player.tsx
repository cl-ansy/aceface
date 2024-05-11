import { useState, useEffect, useMemo } from "react";
import { atom, useAtomValue } from "jotai";

import CardMesh from "@/game/common/meshes/CardMesh";
import { playerFamily } from "@/state/blackjackAtoms";
import { createCardSpring } from "@/lib/animations";

type PlayerProps = {
  position: number;
};

export default function Player({ position }: PlayerProps) {
  const player = useAtomValue(playerFamily(position));

  if (!player || !player.hand) return null;

  return (
    <>
      {Object.entries(player.hand).map(([k, v], i) => (
        <CardMesh
          key={i}
          name={v}
          spring={createCardSpring(Number(k), position)}
        />
      ))}
    </>
  );
}

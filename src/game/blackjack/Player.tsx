"use client";

import { memo } from "react";
import { useAtomValue } from "jotai";

import CardMesh from "@/game/common/meshes/CardMesh";
import { getCardSpring } from "@/lib/animations";

import type { Atom } from "jotai";
import type { Player } from "@/game/blackjack/blackjackTypes";

type PlayerProps = {
  seat: number;
  playerAtom: Atom<Player>;
};

function Card({
  index,
  name,
  seat,
}: {
  index: number;
  name: string;
  seat: number;
}) {
  const spring = getCardSpring(index + 1, seat);
  return <CardMesh name={name} spring={spring} />;
}

const MemoizedCard = memo(Card);

export default function Player({ seat, playerAtom }: PlayerProps) {
  const player = useAtomValue(playerAtom);

  if (!player || !player.hand) return null;

  return (
    <>
      {Object.keys(player.hand).map((cardNumber) => (
        <MemoizedCard
          key={cardNumber}
          index={Number(cardNumber)}
          name={player.hand[Number(cardNumber)]}
          seat={seat}
        />
      ))}
    </>
  );
}

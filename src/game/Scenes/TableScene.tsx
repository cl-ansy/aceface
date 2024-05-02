"use client";

import { Suspense } from "react";
import { atom, useAtom, PrimitiveAtom } from "jotai";
import { ThreeEvent } from "@react-three/fiber";

import LoadingProgress from "@/game/Loaders/LoadingProgress";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
import TableMesh from "@/game/Meshes/TableMesh";
import CardMesh from "@/game/Meshes/CardMesh";

import { degreesToRadians, randomInRange } from "@/lib/utils";
import { DECK } from "@/game/constants";

const TABLEHEIGHT = 95;
const DEFAULT_SPRING = {
  from: {
    positionX: 60,
    positionY: TABLEHEIGHT,
    positionZ: -45,
    rotationX: degreesToRadians(90),
    rotationY: 0,
    rotationZ: degreesToRadians(-10),
  },
  config: {
    duration: 300,
  },
};

const getSpring = (cardIdx: number) => {
  return {
    ...DEFAULT_SPRING,
    to: [
      {
        positionX: 40,
        positionY: TABLEHEIGHT + 5,
        positionZ: -40,
        rotationY: degreesToRadians(-180),
      },
      {
        positionX: randomInRange(-2, 2),
        positionY: TABLEHEIGHT,
        positionZ: randomInRange(24, 26),
        rotationZ: randomInRange(0, 0.5 - (cardIdx % 2)),
      },
    ],
  };
};

const backAtom = atom("Back");
const cardsAtom = atom<PrimitiveAtom<string>[]>([]);
const springsAtom = atom<any>([]);

export function TableGame() {
  const [springs, setSprings] = useAtom(springsAtom);
  const [cards, setCards] = useAtom(cardsAtom);

  const onDeckClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    const randomCard = Math.floor(Math.random() * (DECK.length - 1));
    const card = atom<string>(DECK[randomCard]);
    const spring = getSpring(cards.length);

    setSprings([...springs, spring]);
    setCards([...cards, card]);
  };

  return (
    <>
      <CardMesh
        card={backAtom}
        spring={DEFAULT_SPRING}
        handleClick={onDeckClick}
      />
      {cards.map((card, i) => (
        <CardMesh key={i} card={card} spring={springs[i]} />
      ))}
    </>
  );
}

export function TableScene() {
  return (
    <>
      <TableCamera />
      <TableControls />
      <TableLighting />

      <Suspense fallback={<LoadingProgress />}>
        <TableMesh />
        <TableGame />
      </Suspense>
    </>
  );
}

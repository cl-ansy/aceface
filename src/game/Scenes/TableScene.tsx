"use client";

import { Suspense } from "react";
import { atom, useAtom, PrimitiveAtom } from "jotai";
import { ThreeEvent } from "@react-three/fiber";

import LoadingProgress from "@/game/Loaders/LoadingProgress";
import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
import TableMesh from "@/game/Meshes/TableMesh";
import CardSpring from "@/game/Meshes/CardSpring";
import { InstanceProvider } from "@/game/Meshes/GLTF/InstanceProvider";

import { degreesToRadians, randomInRange } from "@/lib/utils";
import { DECK } from "@/game/constants";

const TABLEHEIGHT = 9.5;
const DEFAULT_SPRING = {
  from: {
    positionX: 5.5,
    positionY: TABLEHEIGHT,
    positionZ: -4.5,
    rotationY: degreesToRadians(10),
    rotationZ: degreesToRadians(180),
  },
  config: {
    precision: 0.0001,
    duration: 300,
  },
};

const getSpring = (cardIdx: number) => {
  return {
    ...DEFAULT_SPRING,
    to: [
      {
        positionX: 4,
        positionY: TABLEHEIGHT + 2,
        positionZ: -4,
        rotationY: degreesToRadians(0),
        rotationZ: degreesToRadians(0),
      },
      {
        positionX: randomInRange(-0.1, 0.1),
        positionY: TABLEHEIGHT + cardIdx * 0.001,
        positionZ: randomInRange(0.9, 1.1),
        rotationY: randomInRange(-0.2, 0.2),
      },
    ],
  };
};

const backAtom = atom("Joker");
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
      <CardSpring
        card={backAtom}
        spring={DEFAULT_SPRING}
        handleClick={onDeckClick}
      />
      {cards.map((card, i) => (
        <CardSpring key={i} card={card} spring={springs[i]} />
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
        <InstanceProvider>
          <TableMesh />
          <TableGame />
        </InstanceProvider>
      </Suspense>
    </>
  );
}

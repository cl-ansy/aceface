import { useState, useRef } from "react";
import { atom, PrimitiveAtom } from "jotai";
import { ThreeEvent } from "@react-three/fiber";

import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
import TableMesh from "@/game/Meshes/TableMesh";
import CardMesh from "@/game/Meshes/CardMesh";

import { randomInRange } from "@/lib/utils";
import { DECK } from "@/lib/constants";

const TABLEHEIGHT = 195;

const backAtom = atom("Back");

export default function Table() {
  const springs = useRef<any>({});
  const [cards, setCards] = useState<PrimitiveAtom<string>[]>([]);

  const getSpring = (cardIdx: number) => {
    if (springs.current[cardIdx]) return springs.current[cardIdx];
    const spring = {
      from: {
        positionX: 100,
        positionY: 100,
        positionZ: TABLEHEIGHT,
        rotationX: -Math.PI,
        rotationZ: 0,
      },
      to: {},
      config: {
        tension: 150,
        friction: 29,
      },
    };

    if (cardIdx > -1) {
      spring.to = {
        positionX: randomInRange(-5, 5),
        positionY: randomInRange(-18, -22),
        rotationX: 0,
        rotationZ: randomInRange(0, 0.5 - (cardIdx % 2)),
      };
    }

    springs.current[cardIdx] = spring;
    return spring;
  };

  const onDeckClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const randomCard = Math.floor(Math.random() * (DECK.length - 1));
    const card = atom<string>(DECK[randomCard]);
    setCards([...cards, card]);
  };

  return (
    <>
      <TableCamera />
      {/* <TableControls /> */}
      <TableLighting />
      <TableMesh />
      <CardMesh
        card={backAtom}
        spring={getSpring(-1)}
        handleClick={onDeckClick}
      />
      {cards.map((card, i) => (
        <CardMesh key={i} card={card} spring={getSpring(i)} />
      ))}
    </>
  );
}

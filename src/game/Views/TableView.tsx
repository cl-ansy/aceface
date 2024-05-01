import { atom, useAtom, PrimitiveAtom } from "jotai";
import { ThreeEvent } from "@react-three/fiber";

import TableCamera from "@/game/Cameras/TableCamera";
import TableControls from "@/game/Controls/TableControls";
import TableLighting from "@/game/Lighting/TableLighting";
import TableMesh from "@/game/Meshes/TableMesh";
import CardMesh from "@/game/Meshes/CardMesh";

import { degreesToRadians, randomInRange } from "@/lib/utils";
import { DECK } from "@/lib/constants";

const TABLEHEIGHT = 190;
const DEFAULT_SPRING = {
  from: {
    positionX: 100,
    positionY: 100,
    positionZ: TABLEHEIGHT,
    rotationX: degreesToRadians(180),
    rotationZ: 0,
  },
  delay: 0,
  config: {
    duration: 300,
  },
};

const getSpring = (cardIdx: number) => {
  return {
    ...DEFAULT_SPRING,
    to: [
      {
        positionX: 50,
        positionY: 25,
        positionZ: TABLEHEIGHT + 50,
        rotationX: 0,
      },
      {
        positionX: randomInRange(-5, 5),
        positionY: randomInRange(-18, -22),
        positionZ: TABLEHEIGHT,
        rotationZ: randomInRange(0, 0.5 - (cardIdx % 2)),
      },
    ],
  };
};

const backAtom = atom("Back");
const cardsAtom = atom<PrimitiveAtom<string>[]>([]);
const springsAtom = atom<any>([]);

export default function Table() {
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
      <TableCamera />
      <TableControls />
      <TableLighting />
      <TableMesh />
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

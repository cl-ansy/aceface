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
    positionX: 125,
    positionY: TABLEHEIGHT,
    positionZ: -100,
    rotationX: degreesToRadians(90),
    rotationY: 0,
    rotationZ: degreesToRadians(10),
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
        positionX: 90,
        positionY: TABLEHEIGHT + 25,
        positionZ: -90,
        rotationY: degreesToRadians(-180),
      },
      {
        positionX: randomInRange(-5, 5),
        positionY: TABLEHEIGHT,
        positionZ: randomInRange(48, 52),
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

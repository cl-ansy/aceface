"use client";

import { atom, useAtom, PrimitiveAtom } from "jotai";
import { ThreeEvent } from "@react-three/fiber";

import Player from "@/game/blackjack/Player";
import { PlayerInterface } from "@/game/blackjack/PlayerInterface";

import { degreesToRadians, randomInRange } from "@/lib/utils";
import { DECK, TABLE_HEIGHT } from "@/game/constants";

const DEFAULT_SPRING = {
  from: {
    positionX: 5.5,
    positionY: TABLE_HEIGHT,
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
        positionY: TABLE_HEIGHT + 1,
        positionZ: -4.5,
        rotationY: degreesToRadians(0),
        rotationZ: degreesToRadians(0),
      },
      {
        positionX: randomInRange(-0.1, 0.1),
        positionY: TABLE_HEIGHT + cardIdx * 0.01,
        positionZ: randomInRange(0.9, 1.1),
        rotationY: randomInRange(-0.2, 0.2),
      },
    ],
  };
};

const cardsAtom = atom<PrimitiveAtom<string>[]>([]);
const springsAtom = atom<any>([]);

export default function BlackjackGameManager() {
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
      <PlayerInterface />
      <Player position={1} />
      <Player position={2} />
      <Player position={3} />
      <Player position={4} />
      <Player position={5} />
      {/* {cards.map((card, i) => (
        <CardSpring key={i} card={card} spring={springs[i]} />
      ))} */}
    </>
  );
}

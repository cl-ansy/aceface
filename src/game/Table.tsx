import { useState, useRef } from "react";
import { ThreeEvent } from "@react-three/fiber";

import CardMesh from "@/game/Meshes/CardMesh";

import { DECK } from "@/lib/constants";

const TABLEHEIGHT = 100;

export default function Deck() {
  const springs = useRef<any>({});
  const [cards, setCards] = useState<string[]>([]);

  const getSpring = (cardIdx: number) => {
    if (springs.current[cardIdx]) return springs.current[cardIdx];
    const spring = {
      from: {
        positionX: 300,
        positionY: 200,
        positionZ: cardIdx * 0.1 + TABLEHEIGHT,
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
        positionX: (0.5 - Math.random()) * 100,
        positionY: -200 - Math.random() * 100,
        positionZ: cardIdx * 0.1 + TABLEHEIGHT,
        rotationX: 0,
        rotationZ: 0.5 - Math.random(),
      };
    }

    springs.current[cardIdx] = spring;
    return spring;
  };

  const onDeckClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const randomCard = Math.floor(Math.random() * (DECK.length - 1));
    setCards([...cards, DECK[randomCard]]);
  };

  return (
    <>
      <CardMesh name="Back" spring={getSpring(-1)} handleClick={onDeckClick} />
      {cards.map((card, i) => (
        <CardMesh key={i} name={card} spring={getSpring(i)} />
      ))}
    </>
  );
}

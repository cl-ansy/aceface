import { SyntheticEvent, useRef } from "react";
import { useSprings } from "@react-spring/three";

import CardMesh from "@/game/Meshes/CardMesh";

import { DECK } from "@/lib/constants";
import { ThreeEvent } from "@react-three/fiber";

const count = DECK.length;
const startDelay = (n: number) => (count - n) * 100;

export default function Deck() {
  const isThrown = useRef(new Set());
  const [springs, api] = useSprings(
    count,
    (i) => ({
      from: {
        positionX: 400,
        positionY: 0,
        positionZ: i,
        rotationX: Math.PI,
        rotationZ: 0,
      },
      config: {
        tension: 150,
        friction: 29,
      },
    }),
    []
  );

  const throwCard = (cardIdx: number) => {
    if (isThrown.current.has(cardIdx)) return;
    isThrown.current.add(cardIdx);

    api.start((springIdx) => {
      if (cardIdx !== springIdx) return; // only start animation for current spring
      return {
        to: {
          positionX: -400 - Math.random() * 200,
          positionY: (0.5 - Math.random()) * 200,
          positionZ: count + (count - cardIdx),
          rotationX: 0,
          rotationZ: 0.5 - Math.random(),
        },
        immediate: (key) => {
          return ["positionZ", "rotationX"].includes(key);
        },
      };
    });
  };

  return (
    <>
      {springs.map(
        ({ positionX, positionY, positionZ, rotationX, rotationZ }, i) => (
          <CardMesh
            key={i}
            name={DECK[i]}
            handleClick={(event) => {
              event.stopPropagation();
              throwCard(i);
            }}
            positionX={positionX}
            positionY={positionY}
            positionZ={positionZ}
            rotationX={rotationX}
            rotationZ={rotationZ}
          />
        )
      )}
    </>
  );
}
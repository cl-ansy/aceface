import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useSprings } from "@react-spring/three";

import CardMesh from "@/game/Meshes/CardMesh";

import { DECK } from "@/lib/constants";

const count = DECK.length;
const startDelay = (n: number) => (count - n) * 100;
const TABLEHEIGHT = 100;

export default function Deck() {
  const { invalidate } = useThree();
  const isThrown = useRef(new Set());
  const [springs, api] = useSprings(
    count,
    (i) => ({
      from: {
        positionX: 300,
        positionY: 200,
        positionZ: i * 0.1 + TABLEHEIGHT,
        rotationX: -Math.PI,
        rotationZ: 0,
      },
      config: {
        tension: 150,
        friction: 29,
      },
      onChange: () => {
        // invalidate();
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
          positionX: (0.5 - Math.random()) * 100,
          positionY: -200 - Math.random() * 100,
          positionZ: (count + (count - cardIdx)) * 0.1 + TABLEHEIGHT,
          rotationX: 2 * Math.PI,
          rotationZ: 0.5 - Math.random(),
        },
        immediate: (key) => {
          return ["positionZ"].includes(key);
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

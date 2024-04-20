import { useSprings } from "@react-spring/three";

import CardMesh from "@/game/Meshes/CardMesh";

import { DECK } from "@/lib/constants";

const count = DECK.length;
const startDelay = (n: number) => (count - n) * 100;

export default function Deck() {
  const [springs, api] = useSprings(
    count,
    (i) => ({
      positionX: 400,
      positionY: 0,
      positionZ: 0,
      rotationX: Math.PI,
      rotationZ: 0,
      config: {
        tension: 238,
        friction: 29,
      },
    }),
    []
  );

  const handleOnClick = () => {
    api.start((i) => ({
      positionZ: count - i,
      rotationX: 0,
      delay: startDelay(i),
      immediate: true,
    }));
    api.start((i) => ({
      positionX: -400 - Math.random() * 200,
      positionY: (0.5 - Math.random()) * 200,
      rotationZ: 0.5 - Math.random(),
      delay: startDelay(i),
    }));
  };

  return (
    <group onClick={handleOnClick}>
      {springs.map(
        ({ positionX, positionY, positionZ, rotationX, rotationZ }, i) => (
          <CardMesh
            key={i}
            name={DECK[i]}
            positionX={positionX}
            positionY={positionY}
            positionZ={positionZ}
            rotationX={rotationX}
            rotationZ={rotationZ}
          />
        )
      )}
    </group>
  );
}

import "@/game/Loaders/AssetLoader";
import { useRef } from "react";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import {
  useSpring,
  SpringValues,
  animated,
  GoalValue,
  ToProps,
  SpringConfig,
} from "@react-spring/three";

type CardSpringValues = SpringValues<{
  positionX?: number;
  positionY?: number;
  positionZ?: number;
  rotationX?: number;
  rotationZ?: number;
}>;

type CardSpring = {
  from: GoalValue<CardSpringValues>;
  to?: ToProps<CardSpringValues>;
  config?: SpringConfig;
};

type CardMeshProps = {
  name: string;
  spring: CardSpring;
  handleClick?: (event: ThreeEvent<MouseEvent>) => void;
};

export default function CardMesh({ name, spring, handleClick }: CardMeshProps) {
  const isAnimating = useRef(false);
  const cardTexture = useTexture(`/cards/vector/${name}.svg`);
  const backTexture = useTexture("/cards/vector/Back.svg");
  const { invalidate } = useThree();

  const { positionX, positionY, positionZ, rotationX, rotationZ } = useSpring({
    ...spring,
    config: {
      precision: 0.0001,
      ...spring.config,
    },
    onStart: () => {
      isAnimating.current = true;
    },
    onRest: () => {
      isAnimating.current = false;
    },
  });

  useFrame(() => isAnimating.current && invalidate());

  // Cards should me 2.5:3.5
  return (
    <animated.mesh
      onClick={handleClick}
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
      rotation-x={rotationX}
      rotation-z={rotationZ}
    >
      <boxGeometry args={[100, 140, 0.1]} />
      {[null, null, null, null, cardTexture, backTexture].map((texture, i) => (
        <meshBasicMaterial
          key={i}
          attach={`material-${i}`}
          map={texture}
          depthWrite={false}
          transparent
        />
      ))}
    </animated.mesh>
  );
}

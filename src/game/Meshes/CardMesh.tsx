import "@/game/Loaders/CardPreloader";

import { useRef } from "react";
import { useAtomValue } from "jotai";
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
import { PrimitiveAtom } from "jotai";

import { RoundedBoxFlat } from "@/game/Geometries/RoundedBoxFlat";

type CardSpringValues = SpringValues<{
  positionX?: number;
  positionY?: number;
  positionZ?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
}>;

type CardSpring = {
  from: GoalValue<CardSpringValues>;
  to?: ToProps<CardSpringValues>;
  config?: SpringConfig;
};

type CardMeshProps = {
  card: PrimitiveAtom<string>;
  spring: CardSpring;
  handleClick?: (event: ThreeEvent<MouseEvent>) => void;
};

// Standard card dimensions
// Width: 2.5 in | 63.5 mm
// Height: 3.5 in | 88.9 mm
// Depth: 2mm
// Radius: 3.5mm
const CardGeometry = RoundedBoxFlat(6.35, 8.89, 0.1, 0.35, 4);

export default function CardMesh({ card, spring, handleClick }: CardMeshProps) {
  const isAnimating = useRef(false);
  const cardName = useAtomValue(card);
  const cardTexture = useTexture(`/assets/cards/vector/${cardName}.svg`);
  const backTexture = useTexture("/assets/cards/vector/Back.svg");
  const { invalidate } = useThree();

  const [{ positionX, positionY, positionZ, rotationX, rotationY, rotationZ }] =
    useSpring(
      () => ({
        ...spring,
        onStart: () => (isAnimating.current = true),
        onRest: () => (isAnimating.current = false),
      }),
      [spring]
    );

  useFrame(() => isAnimating.current && invalidate());

  return (
    <animated.mesh
      onClick={handleClick}
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
      geometry={CardGeometry}
      scale={3}
    >
      <meshPhongMaterial
        attach="material-0"
        map={cardTexture}
        depthWrite={false}
      />
      <meshPhongMaterial
        attach="material-1"
        map={backTexture}
        depthWrite={false}
      />
      <meshPhongMaterial
        attach="material-2"
        color="0xffffff"
        depthWrite={false}
      />
    </animated.mesh>
  );
}

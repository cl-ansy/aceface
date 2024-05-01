import "@/game/Loaders/AssetLoader";
import { useRef, useMemo, useEffect } from "react";
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

import { CardGeometry } from "@/game/Geometries/RoundedBoxFlat";

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
      <meshStandardMaterial
        attach="material-0"
        map={cardTexture}
        depthWrite={false}
      />
      <meshStandardMaterial
        attach="material-1"
        map={backTexture}
        depthWrite={false}
      />
      <meshStandardMaterial
        attach="material-2"
        color="white"
        depthWrite={false}
      />
    </animated.mesh>
  );
}

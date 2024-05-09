"use client";

import { useRef } from "react";
import { useAtomValue } from "jotai";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import {
  useSpring,
  SpringValues,
  GoalValue,
  ToProps,
  SpringConfig,
} from "@react-spring/three";
import { PrimitiveAtom } from "jotai";

import { MeshInstance as Card } from "@/game/meshes/gltf/InstanceProvider";

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

type CardSpringProps = {
  card: PrimitiveAtom<string>;
  spring: CardSpring;
  handleClick?: (event: ThreeEvent<MouseEvent>) => void;
};

// Standard card dimensions
// Width: 2.5 in | 63.5 mm
// Height: 3.5 in | 88.9 mm
// Depth: 2mm
// Radius: 3.5mm
export default function CardSpring({
  card,
  spring,
  handleClick,
}: CardSpringProps) {
  const isAnimating = useRef(false);
  const cardName = useAtomValue(card);
  const { invalidate } = useThree();

  const [{ positionX, positionY, positionZ, rotationX, rotationY, rotationZ }] =
    useSpring(
      () => ({
        ...spring,
        onStart: () => (isAnimating.current = true),
        onRest: () => (isAnimating.current = false),
      }),
      [spring],
    );

  useFrame(() => isAnimating.current && invalidate());

  return (
    <Card
      name={cardName}
      onClick={handleClick}
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
      // TODO: Redo models with Backface Culling so we don't have to crank this.
      scale-y={2}
    />
  );
}

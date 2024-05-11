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

import { MeshInstance } from "@/game/common/meshes/gltf/InstanceProvider";

type CardSpringValues = {
  positionX?: number;
  positionY?: number;
  positionZ?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
};

type CardSpring = {
  from: CardSpringValues;
  to?: CardSpringValues | CardSpringValues[];
  config?: SpringConfig;
};

type CardMeshProps = {
  name: string;
  spring: CardSpring;
};

// Standard card dimensions
// Width: 2.5 in | 63.5 mm
// Height: 3.5 in | 88.9 mm
// Depth: 2mm
// Radius: 3.5mm
export default function CardMesh({ name, spring }: CardMeshProps) {
  const isAnimating = useRef(false);
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
    <MeshInstance
      name={name}
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

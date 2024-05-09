import "@/game/loaders/CardPreloader";

import { useTexture } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { type AnimatedProps } from "@react-spring/three";

import { RoundedBoxFlat } from "@/game/geometries/RoundedBoxFlat";
import { MeshProps } from "@react-three/fiber";

const CardGeometry = RoundedBoxFlat(6.35, 8.89, 0.1, 0.35, 4);

export default function Card({ name, ...props }: AnimatedProps<MeshProps>) {
  const cardTexture = useTexture(`/assets/models/cards/vector/${name}.svg`);
  const backTexture = useTexture("/assets/models/cards/vector/Back.svg");

  return (
    <animated.mesh geometry={CardGeometry} {...props}>
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
      <meshPhongMaterial attach="material-2" color="white" depthWrite={false} />
    </animated.mesh>
  );
}

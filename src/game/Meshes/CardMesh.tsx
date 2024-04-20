import { useTexture } from "@react-three/drei";
import { SpringValue, animated } from "@react-spring/three";
import { RoundedBox } from "@react-three/drei";

export default function CardMesh({
  name,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationZ,
}: {
  name: string;
  positionX: SpringValue<number>;
  positionY: SpringValue<number>;
  positionZ: SpringValue<number>;
  rotationX: SpringValue<number>;
  rotationZ: SpringValue<number>;
}) {
  const [cardTexture, backTexture] = useTexture([
    `/cards/vector/${name}.svg`,
    "/cards/vector/Back.svg",
  ]);

  return (
    <animated.mesh
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
      rotation-x={rotationX}
      rotation-z={rotationZ}
    >
      <boxGeometry args={[250, 350, 0]} />
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

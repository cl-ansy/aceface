import { useTexture } from "@react-three/drei";
import { SpringValue, animated } from "@react-spring/three";
import { ThreeEvent } from "@react-three/fiber";

type CardMeshProps = {
  name: string;
  handleClick?: (event: ThreeEvent<MouseEvent>) => void;
  positionX: SpringValue<number>;
  positionY: SpringValue<number>;
  positionZ: SpringValue<number>;
  rotationX: SpringValue<number>;
  rotationZ: SpringValue<number>;
};

export default function CardMesh({
  name,
  handleClick,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationZ,
}: CardMeshProps) {
  const [cardTexture, backTexture] = useTexture([
    `/cards/vector/${name}.svg`,
    "/cards/vector/Back.svg",
  ]);

  return (
    <animated.mesh
      onClick={handleClick}
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

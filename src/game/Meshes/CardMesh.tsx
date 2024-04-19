import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function CardMesh({ name }: { name: string }) {
  const meshRef = useRef<Mesh>(null!);

  const [cardTexture, backTexture] = useTexture([
    `/cards/vector/${name}.svg`,
    "/cards/vector/Back.svg",
  ]);

  useFrame(({ clock }) => {
    // console.log(clock.getElapsedTime() * 3);
    // meshRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[250, 350, 0]} />
      {[null, null, null, null, cardTexture, backTexture].map((texture, i) => (
        <meshBasicMaterial
          key={i}
          attach={`material-${i}`}
          map={texture}
          transparent
        />
      ))}
    </mesh>
  );
}

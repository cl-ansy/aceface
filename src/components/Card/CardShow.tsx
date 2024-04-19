"use client";

import { Suspense, useRef } from "react";
import { Camera, Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, MapControls, useProgress, useTexture } from "@react-three/drei";
import { Mesh } from "three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={5} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </>
  );
}

function Controls() {
  return (
    <MapControls enableDamping={true} zoomToCursor={true} screenSpacePanning />
  );
}

function Card({ name }: { name: string }) {
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

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ zoom: 0.4 }}
        orthographic
        linear
        flat
      >
        <Suspense fallback={<Loader />}>
          <Card name="JD" />
        </Suspense>
        <Lighting />
        <Controls />
      </Canvas>
    </div>
  );
}

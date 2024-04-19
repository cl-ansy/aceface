"use client";

import { Suspense, useRef } from "react";
import { Camera, Canvas, useFrame, MeshProps } from "@react-three/fiber";
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
  const cam = useRef<Camera>();
  return <MapControls camera={cam.current} screenSpacePanning />;
}

function Card({ name }: { name: string }) {
  const meshRef = useRef<Mesh>(null!);

  const [cardTexture, backTexture] = useTexture([
    `/cards/vector/${name}.svg`,
    "/cards/vector/Back.svg",
  ]);

  useFrame(({ clock }) => {
    meshRef.current.rotation.z = clock.getElapsedTime() * 3;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry attach="geometry" args={[2.5, 3.5, 0]} />
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
        dpr={[1, 2]}
        orthographic
        camera={{ zoom: 50, position: [0, 0, 100] }}
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

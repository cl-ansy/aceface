"use client";

import { Suspense, useRef } from "react";
import { Camera, Canvas, extend, useLoader } from "@react-three/fiber";
import {
  Html,
  MapControls,
  PresentationControls,
  useProgress,
  useTexture,
} from "@react-three/drei";

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
  const [cardTexture, backTexture] = useTexture([
    `/cards/vector/${name}.svg`,
    "/cards/vector/Back.svg",
  ]);

  return (
    <mesh>
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
      <Canvas dpr={[1, 2]} linear flat>
        <Suspense fallback={<Loader />}>
          <PresentationControls>
            <Card name="JD" />
          </PresentationControls>
        </Suspense>
        <Lighting />
        <Controls />
      </Canvas>
    </div>
  );
}
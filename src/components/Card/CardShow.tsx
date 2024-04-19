"use client";

import { Suspense, useRef } from "react";
import { Camera, Canvas, useLoader } from "@react-three/fiber";
import { Html, Image, MapControls, Svg, useProgress } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

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

function Card() {
  const colorMap = useLoader(TextureLoader, "/cards/vector/JD.svg");
  return (
    <mesh>
      <planeGeometry args={[2.5, 3.5]} />
      <meshBasicMaterial map={colorMap} transparent />
    </mesh>
  );
}

export default function CardShow() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <Canvas dpr={2} linear flat>
        <Suspense fallback={<Loader />}>
          <Card />
        </Suspense>
        <Lighting />
        <Controls />
      </Canvas>
    </div>
  );
}

"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

function AssetLoader() {
  useTexture([
    "/cards/vector/2H.svg",
    "/cards/vector/3H.svg",
    "/cards/vector/4H.svg",
    "/cards/vector/5H.svg",
    "/cards/vector/6H.svg",
    "/cards/vector/7H.svg",
    "/cards/vector/8H.svg",
    "/cards/vector/9H.svg",
    "/cards/vector/TH.svg",
    "/cards/vector/JH.svg",
    "/cards/vector/QH.svg",
    "/cards/vector/KH.svg",
    "/cards/vector/AH.svg",
    "/cards/vector/2S.svg",
    "/cards/vector/3S.svg",
    "/cards/vector/4S.svg",
    "/cards/vector/5S.svg",
    "/cards/vector/6S.svg",
    "/cards/vector/7S.svg",
    "/cards/vector/8S.svg",
    "/cards/vector/9S.svg",
    "/cards/vector/TS.svg",
    "/cards/vector/JS.svg",
    "/cards/vector/QS.svg",
    "/cards/vector/KS.svg",
    "/cards/vector/AS.svg",
    "/cards/vector/2C.svg",
    "/cards/vector/3C.svg",
    "/cards/vector/4C.svg",
    "/cards/vector/5C.svg",
    "/cards/vector/6C.svg",
    "/cards/vector/7C.svg",
    "/cards/vector/8C.svg",
    "/cards/vector/9C.svg",
    "/cards/vector/TC.svg",
    "/cards/vector/JC.svg",
    "/cards/vector/QC.svg",
    "/cards/vector/KC.svg",
    "/cards/vector/AC.svg",
    "/cards/vector/2D.svg",
    "/cards/vector/3D.svg",
    "/cards/vector/4D.svg",
    "/cards/vector/5D.svg",
    "/cards/vector/6D.svg",
    "/cards/vector/7D.svg",
    "/cards/vector/8D.svg",
    "/cards/vector/9D.svg",
    "/cards/vector/TD.svg",
    "/cards/vector/JD.svg",
    "/cards/vector/QD.svg",
    "/cards/vector/KD.svg",
    "/cards/vector/AD.svg",
    "/cards/vector/Back.svg",
  ]);
  return null;
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
          <AssetLoader />
          <Card name="JD" />
        </Suspense>
        <Lighting />
        <Controls />
      </Canvas>
    </div>
  );
}

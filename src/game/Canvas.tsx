"use client";

import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Grid, Stats } from "@react-three/drei";
import { Perf } from "r3f-perf";

import { BlackjackScene } from "@/game/scenes/BlackjackScene";

function Helpers() {
  return (
    <>
      {/* <arrowHelper /> */}
      {/* <axesHelper args={[50]} /> */}
      {/* <gridHelper args={[2000, 40]} /> */}
      <Perf position="top-left" />
      {/* <Stats /> */}
    </>
  );
}

function Ground() {
  const gridConfig = {
    cellSize: 1,
    cellThickness: 1,
    cellColor: "#6f6f6f",
    sectionSize: 10,
    sectionThickness: 1,
    sectionColor: "#9d4b4b",
    fadeDistance: 50,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };
  return <Grid position={[0, -0.01, 0]} args={[10, 10]} {...gridConfig} />;
}

export function Canvas() {
  return (
    <div id="canvas-container" className="h-screen w-screen">
      <ThreeCanvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ sortObjects: false, antialias: true }}
      >
        <Ground />
        <BlackjackScene />
        <Helpers />
      </ThreeCanvas>
    </div>
  );
}

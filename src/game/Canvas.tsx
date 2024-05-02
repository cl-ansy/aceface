"use client";

import { Canvas as ThreeCanvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import { BlackjackScene } from "@/game/Scenes/BlackjackScene";

function Helpers() {
  const camera = useThree((state) => state.camera);
  return (
    <>
      {/* <arrowHelper /> */}
      <axesHelper args={[1000]} />
      {/* <cameraHelper args={[camera]} /> */}
      {/* <gridHelper args={[2000, 40]} /> */}
      <Perf position="top-left" />
    </>
  );
}

export function Canvas() {
  return (
    <div id="canvas-container" className="w-screen h-screen">
      <ThreeCanvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ sortObjects: false, antialias: true }}
        flat
      >
        <BlackjackScene />

        {/* <Helpers /> */}
      </ThreeCanvas>
    </div>
  );
}

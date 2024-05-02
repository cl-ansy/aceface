import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper, Stars, Stage } from "@react-three/drei";

function Spotlight() {
  const spotlightRef = useRef<any>();
  useHelper(spotlightRef, SpotLightHelper);

  return (
    <spotLight
      ref={spotlightRef}
      position={[0, 0, 400]}
      rotation={[0, 0, 0]}
      intensity={300}
      decay={1.1}
      angle={10}
      castShadow
    />
  );
}

export default function TableLighting() {
  return (
    <>
      <Stage intensity={-5} />
      {/* <Spotlight />
      <ambientLight intensity={1} /> */}
    </>
  );
}

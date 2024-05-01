import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

function Spotlight() {
  const spotlightRef = useRef<any>();
  useHelper(spotlightRef, SpotLightHelper);

  return (
    <spotLight
      ref={spotlightRef}
      position={[0, 0, 500]}
      intensity={1000}
      decay={1}
      angle={Math.PI / 2.5}
      castShadow
    />
  );
}

export default function TableLighting() {
  return (
    <>
      <Spotlight />
      {/* <ambientLight intensity={3} /> */}
    </>
  );
}

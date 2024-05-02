import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper, Stars, Stage } from "@react-three/drei";

function Spotlight() {
  const spotlightRef = useRef<any>();
  useHelper(spotlightRef, SpotLightHelper);

  return (
    <spotLight
      ref={spotlightRef}
      position={[0, 250, -80]}
      intensity={750}
      decay={1}
      angle={Math.PI / 2.2}
    />
  );
}

export default function TableLighting() {
  return (
    <>
      <Spotlight />
    </>
  );
}

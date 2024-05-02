import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

export function Spotlight() {
  const spotlightRef = useRef<any>();
  // useHelper(spotlightRef, SpotLightHelper);

  return (
    <spotLight
      ref={spotlightRef}
      position={[0, 125, -40]}
      intensity={400}
      decay={1.1}
      angle={Math.PI / 2.2}
    />
  );
}

function AmbientLight() {
  return <ambientLight args={["white", 5]} />;
}

function HemisphereLight() {
  return <hemisphereLight args={["white", "darkslategrey", 1]} />;
}

function DirectionalLight() {
  return <directionalLight args={["white", 0.5]} />;
}

export default function TableLighting() {
  return (
    <>
      {/* <AmbientLight /> */}
      {/* <HemisphereLight /> */}
      <Spotlight />
      <DirectionalLight />
    </>
  );
}
